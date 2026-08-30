import { readFileSync, writeFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import path from "node:path";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");

const constantsSource = readFileSync(path.join(root, "src/utils/constants.js"), "utf-8");
const siteUrlMatch = constantsSource.match(/SITE_URL\s*=\s*"([^"]+)"/);
if (!siteUrlMatch) {
  throw new Error("Could not find SITE_URL in src/utils/constants.js");
}
const SITE_URL = siteUrlMatch[1];

const projectsSource = readFileSync(path.join(root, "src/services/projects.js"), "utf-8");
const slugs = [...projectsSource.matchAll(/^\s*id:\s*"([^"]+)"/gm)].map((match) => match[1]);

const urls = [
  { loc: `${SITE_URL}/`, priority: "1.0" },
  ...slugs.map((slug) => ({ loc: `${SITE_URL}/project/${slug}`, priority: "0.8" })),
];

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map((u) => `  <url>\n    <loc>${u.loc}</loc>\n    <priority>${u.priority}</priority>\n  </url>`).join("\n")}
</urlset>
`;

writeFileSync(path.join(root, "public/sitemap.xml"), xml);
console.log(`Generated public/sitemap.xml with ${urls.length} URLs`);
