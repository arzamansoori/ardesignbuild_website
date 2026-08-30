import sharp from "sharp";
import { existsSync, renameSync } from "node:fs";
import { fileURLToPath } from "node:url";
import path from "node:path";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const assetsDir = path.join(root, "src/assets");

// Oversized top-level marketing images only — src/assets/projects/** is
// already reasonably sized and logo.png/bedroom.png are small enough to skip.
const TARGETS = [
  { src: "DiningRoom.png", out: "DiningRoom.jpg" },
  { src: "jewelleryshop.png", out: "jewelleryshop.jpg" },
  { src: "resortInteriors.png", out: "resortInteriors.jpg" },
  { src: "LivingRoom.png", out: "LivingRoom.jpg" },
  { src: "LivingRoom1.jpg", out: "LivingRoom1.jpg" },
  { src: "kitchen.png", out: "kitchen.jpg" },
];

const MAX_WIDTH = 1600;

async function run() {
  for (const { src, out } of TARGETS) {
    const inputPath = path.join(assetsDir, src);
    if (!existsSync(inputPath)) {
      console.warn(`Skipping missing file: ${src}`);
      continue;
    }

    const outputPath = path.join(assetsDir, out);
    // Source and output can share a filename (e.g. LivingRoom1.jpg), so write
    // to a temp path first and rename into place once encoding is complete.
    const tempPath = `${outputPath}.tmp`;
    const image = sharp(inputPath).rotate();
    const metadata = await image.metadata();
    const resized = metadata.width > MAX_WIDTH
      ? image.resize({ width: MAX_WIDTH })
      : image;

    await resized.jpeg({ quality: 80, mozjpeg: true }).toFile(tempPath);
    renameSync(tempPath, outputPath);
    console.log(`${src} -> ${out}`);
  }
}

run().catch((err) => {
  console.error(err);
  process.exit(1);
});
