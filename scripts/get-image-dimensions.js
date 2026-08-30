import sharp from "sharp";
import { readdirSync, statSync } from "node:fs";
import { fileURLToPath } from "node:url";
import path from "node:path";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const projectsDir = path.join(root, "src/assets/projects");

const IMAGE_EXTENSIONS = new Set([".jpg", ".jpeg", ".png", ".webp"]);

function collectImageFiles(dir) {
  const files = [];
  for (const entry of readdirSync(dir)) {
    const entryPath = path.join(dir, entry);
    if (statSync(entryPath).isDirectory()) {
      files.push(...collectImageFiles(entryPath));
    } else if (IMAGE_EXTENSIONS.has(path.extname(entry).toLowerCase())) {
      files.push(entryPath);
    }
  }
  return files;
}

async function run() {
  const files = collectImageFiles(projectsDir).sort();

  for (const file of files) {
    const { width, height } = await sharp(file).metadata();
    console.log(`${path.relative(projectsDir, file)}: width: ${width}, height: ${height}`);
  }
}

run().catch((err) => {
  console.error(err);
  process.exit(1);
});
