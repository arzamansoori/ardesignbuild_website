# Repo Review — AR Design & Build Website

Scope: full repo at commit `88cae7c` (branch `dev`). A ~13-component React 19 + Vite + Tailwind 4 marketing site for an interior design/build business, deployed at ardesignbuild.in.

---

## Part 1 — As an L7 Engineer

### Overall take
For what it is — a freelance marketing site with no backend, no auth, no data layer — the code is in reasonable shape: consistent component structure, no dead abstractions, no over-engineering. The problems are not architectural complexity, they're **operational hygiene**: nothing enforces quality (no lint/format/CI), performance is left entirely to chance (images), and a couple of real bugs will bite production users. None of this is hard to fix; it's a half-day of cleanup, not a redesign.

### Correctness bugs (fix these)

1. **Contact form silently fails for anyone without Gmail configured as their default mail client / anyone on mobile without the Gmail app** (`ContactSection.jsx:31-35`). `window.open(gmailLink, "_blank")` hardcodes a `mail.google.com` compose URL. Users on Outlook, Apple Mail, or without a Google account get a blank/broken tab and no way to actually send the inquiry. This is the site's primary conversion action — it deserves a real fallback (`mailto:` link, or a backend/Formspree-style submit endpoint) rather than one email provider's web UI.
2. **Email input isn't validated as an email** (`ContactSection.jsx:131-140`) — `type="text"` instead of `type="email"`, so there's no client-side format check and no mobile email keyboard.

### Reliability / resilience

- **Zero tests.** No unit tests, no component tests, no e2e/visual tests, nothing in `package.json` beyond `dev`/`build`/`preview`. For a site with real user-facing logic (routing by slug, image carousel with keyboard nav, form submission), even a handful of smoke tests would catch the bugs above before they ship.
- **No CI.** No `.github/workflows`, no pre-commit hook, no lint gate. Every commit goes straight to whatever branch with no automated check. Combined with commit messages like "more fixes" and "image carousel fixes" (see `git log`), this reads as an iterate-in-prod workflow.
- **No linter or formatter configured** — no `.eslintrc`, no `eslint` dependency at all, no Prettier config. Vite's React template ships with ESLint by default; this project has actively removed or never had it. Code style is currently consistent only because one person is writing it by hand; that won't survive a second contributor.
- **No error boundary** anywhere in the tree — a single render error (e.g., a malformed `ProjectGalleries` entry) takes down the whole page with a blank screen.

### Performance (the biggest engineering gap)

- **Image weight is severe.** `src/assets/*` is 21MB uncompressed for 10 images — `DiningRoom.png` (3.4MB), `jewelleryshop.png` (3.5MB), `resortInteriors.png` (2.9MB), `LivingRoom.png` (2.2MB), etc. These are raw PNG/JPG exports, no compression pass, no WebP/AVIF, no responsive `srcset`, and Vite bundles them as-is. Every one of these ships as a single fixed-size asset regardless of viewport — a phone downloads the same 3.5MB file as a 4K desktop.
- **No lazy loading** — every `<img>` across `Portfolio.jsx`, `Projects.jsx`, `ProjectPage.jsx` loads eagerly with no `loading="lazy"`, no `fetchpriority`, and nothing above-the-fold is prioritized differently from below-the-fold content. First-load payload for the homepage alone is likely 10MB+ of images before any user interaction.
- **No explicit width/height on `<img>` tags** — every image relies on Tailwind classes for sizing but has no intrinsic dimensions set, so the browser can't reserve layout space, causing cumulative layout shift (CLS) as each image downloads in.
- **Same source images reused across multiple "different" projects** (`constants.js`): `kitchen.png` appears in 3 different project galleries and the featured portfolio grid; `DiningRoom.png` appears in 4 places. This is a content problem more than a perf one (see PM section) but it compounds the weight issue — the same multi-MB file effectively gets "reused" as if it were cheap, when in reality each usage is a separate fetch (mitigated only by browser cache, not by build-time dedup/optimization).
- **`public/ARStudioPortfolio.pdf` is 8.5MB** and is linked directly with `target="_blank"` from the primary CTA (`TopSection.jsx:16-23`) — the very first button visitors are likely to click downloads a 8.5MB file with zero indication of size, and no compression was attempted.
- No image CDN, no `vite-imagetools`/`sharp` build step, no `next/image`-equivalent optimization pipeline at all. For a visual-design-portfolio site — where imagery *is* the product — this is the single highest-leverage fix available.

### Accessibility

- Hamburger menu button (`Header.jsx:57-62`) has no `aria-label` or `aria-expanded` — a plain "☰" character with no accessible name.
- Modal (`ImageViewer.jsx`) has no `role="dialog"`, `aria-modal`, or focus trap — keyboard/screen-reader users can tab out of the open lightbox into the page behind it, and focus isn't moved into the dialog on open or restored on close.
- No skip-to-content link; sticky header plus long single-page scroll makes keyboard navigation slow for every page load.
- Color contrast should be spot-checked: `--color-muted: #A58E74` text on `--color-surface: #424530` background is a warm mid-tone on dark olive — worth running through a contrast checker (looks borderline for WCAG AA at small sizes).

### SEO / discoverability

- `index.html` has only a `<title>`, no `<meta name="description">`, no Open Graph/Twitter card tags, no canonical URL, no `robots.txt`, no `sitemap.xml`. For a local business site whose entire value is being found via search, this is a significant, easy-to-fix gap — right now a shared link to ardesignbuild.in gets zero preview card in iMessage/WhatsApp/Slack/LinkedIn.
- No structured data (`LocalBusiness` JSON-LD) despite the site clearly being a local-business marketing page with an address and phone number already in the DOM — this is close to free SEO.
- Individual project pages (`/project/:slug`) all share the same generic `<title>`/meta from `index.html` since there's no per-route head management (no `react-helmet` or Vite equivalent) — every project page looks identical to Google.

### Code quality / maintainability (minor, mostly nitpicks)

- Inconsistent import style: some files use `../assets/x` relative imports with no path alias configured (fine at this size, but will not scale past ~20 components without becoming annoying).
- Commented-out dead code left in place: `Portfolio.jsx:37-42` ("View Projects" button) and a stray duplicated comment in `Footer.jsx:11`. Small, but these should either be deleted or tracked as a TODO — dead code in version control long-term is a code smell, especially with no lint rule to flag it.
- `ContactSection.jsx` builds an email body with a raw multi-line template literal containing unnecessary leading whitespace (`Hi AR Design & Build Studio,\n    \nProject Details:`) — the stray indentation will appear in the actual sent email body.
- `package.json` still has default freelance-marketplace boilerplate (`license: "ISC"`, generic `repository`/`bugs`/`homepage` URLs pointing at a different GitHub user (`arzamansoori`) than the current git config) — cosmetic, but worth cleaning before treating this as a "real" project going forward.
- `devDependencies` includes both `@tailwindcss/cli` and `@tailwindcss/vite` — the CLI package appears unused since Vite's own plugin handles compilation; dead dependency.
- No `.env`/config separation for the destination email address, phone number, and social links — they're duplicated verbatim across `ContactSection.jsx` and `Footer.jsx` (email address, phone number both hardcoded twice). A single `constants.js` entry (which already exists for `BUSINESS_NAME`) would prevent drift.

### What's already good (worth keeping)
- Consistent, idiomatic function-component + hooks style throughout; no legacy class components or mixed patterns.
- `ProjectGalleries`/`ProjectsDesc` derivation in `constants.js` (deriving the summary list from the detail map via `Object.entries(...).map(...)`) is a genuinely good single-source-of-truth pattern — avoids the two lists drifting apart.
- `ImageViewer`'s scroll-snap carousel is a clever, dependency-free way to get swipeable full-screen image viewing without pulling in a carousel library.
- Tailwind theme tokens (`@theme` block in `index.css`) are centralized and named semantically (`cream`, `muted`, `accent`, `surface`, `line`) rather than scattered hex values — good discipline for a design-heavy site.
- Routing/back-link/`ScrollToHash` composition is a clean way to fake multi-page feel with anchor-based section nav plus real sub-routes for project detail pages.

---

## Part 2 — As a Product Manager

### What this site is for
A single freelance interior-design/build studio (Hyderabad, India) using the site as a digital portfolio + lead-gen funnel: show work → build trust (reviews) → capture contact. That's the whole job. Everything should be judged against "does this get a homeowner to submit an inquiry."

### Funnel and conversion concerns

1. **The primary CTA is broken for a meaningful share of visitors.** "Get Consultation" → contact form → Gmail-compose-only submission (see engineering section). Every lead lost here is 100% wasted marketing spend/word-of-mouth. This is the single most important fix in the whole repo, full stop — it's not a UX detail, it's the business's lead pipe having a hole in it.
2. **No lead confirmation.** After clicking "Send Message," there is no confirmation state — the button doesn't disabled/loading-spin, there's no "thanks, we'll be in touch" message, and since it just opens a new Gmail tab, the original page state is untouched and the form fields aren't even cleared. A user who isn't paying close attention won't know if anything happened.
3. **No lead capture without an active outbound email step.** The form requires the *visitor* to manually hit "Send" inside Gmail's compose window after it opens — this is an unusual two-step flow most users won't expect and adds friction that will cost submissions. A standard form-to-inbox flow (e.g., Formspree/EmailJS/a lightweight serverless function) would materially raise conversion.
4. **"View Portfolio" competes with "Get Consultation" as equal-weight CTAs** in the hero (`TopSection.jsx`) — both are styled identically (`btn-primary`). If the business goal is inquiries, the consultation CTA should be visually dominant; the PDF portfolio is a secondary/exploratory action and downloading an unlabeled 8.5MB PDF with no size warning is itself a soft bounce risk on mobile data.

### Content and trust signals

5. **Duplicate/reused imagery across "different" projects undermines credibility.** The same `kitchen.png` appears as the hero image for "Downtown Loft Kitchen" *and* "Heritage Boutique Fit-Out," and `DiningRoom.png` appears in four separate projects with different captions describing supposedly distinct rooms. For a design portfolio — where the entire pitch is "look at our real work" — a discerning visitor (or a competitor) who opens two project pages back-to-back will notice identical photos with different fictional captions. This is a real trust risk, not just a content nit: it can read as fabricated portfolio content rather than "placeholder, coming soon." Either get more real project photography or clearly label these as concept/sample galleries.
6. **Only 3 client reviews, all hardcoded, no way to add more without a code deploy.** Fine for launch, but there's no review-collection mechanism (no Google review embed, no way for the business owner to add a 4th review without asking an engineer). This will stagnate.
7. **No case-study depth.** Project pages show 3 images + one-line captions with no scope, timeline, budget range, or square footage — the details that actually help a prospective client self-qualify ("do they do projects like mine, at my scale, in my budget?"). Right now the projects section functions as a gallery, not proof-of-work.
8. **No social proof beyond text reviews** — no Instagram feed embed despite linking to an Instagram account, no before/after comparisons (a very standard, high-converting pattern for interior design specifically).

### Information architecture / navigation

9. **Nav says "Portfolio" and "Reviews" but the page also has "About" (Design Philosophy) and "Projects" sections that aren't in the primary nav at all** (`Header.jsx` nav links: Home, Portfolio, Reviews, Contact — no "Projects" or "About" link, even though those sections exist and Footer does link to `#about`). A visitor scanning the header nav has no way to know the projects/case-studies section exists unless they scroll past it. This is a straightforward inconsistency between Header and Footer nav.
10. **"Portfolio" (image grid, `Portfolio.jsx`) and "Projects" (clickable case-study cards, `Projects.jsx`) are two separately-named, visually similar grids of interior photos back-to-back on the homepage** with no distinction explained to the user about why one is clickable and one isn't. This will read as redundant/confusing rather than as two intentionally different offerings.
11. **No dedicated services/pricing information** — Footer lists four service categories (Residential Design, Commercial Spaces, Consultation, Space Planning) as plain text with no links, no detail, and no way to learn more about any of them. A visitor interested specifically in "Commercial Spaces" has no path to relevant content.

### Business/ops gaps

12. **No analytics.** No Google Analytics/Plausible/anything — the business has zero visibility into how many people visit, what they click, where they drop off, or whether the contact form flow is even working in the wild. Given the contact-form bug above, they likely don't know leads are being lost right now.
13. **No SEO investment** (see engineering section) for a local-service business whose customer acquisition is very plausibly "searched interior designer Hyderabad" — missing meta description, OG tags, and structured local-business data is leaving organic traffic on the table for close to zero effort.
14. **Mobile portfolio PDF and social links are the only "leave the site" actions** — worth asking whether the PDF should exist at all vs. being folded into the on-site portfolio, since it's a large download that duplicates content already on the page.

### Prioritized recommendation (if only doing 3 things)
1. Fix the contact form to reliably deliver leads regardless of the visitor's device/email client, and add a visible success/error state.
2. Compress and lazy-load all images (single highest engineering effort/impact ratio) — will materially improve mobile load time and bounce rate on a site that's 100% visual.
3. Resolve the duplicate-photo-across-projects issue before more traffic arrives — it's a credibility risk unique to a portfolio business.
