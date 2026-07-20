#!/usr/bin/env node
// Extract per-page text and embedded images from the DGT manual PDF.
// Requires poppler (pdftotext, pdfimages, pdfinfo).
//
// Usage:
//   node scripts/extract-manual.mjs [pdfPath]
//
// Output layout:
//   data/source/pages/page-001.txt ... page-NNN.txt
//   data/source/images/image-<page>-<idx>.png|jpg
//   data/source/index.json  (page count, sizes, per-image page mapping)

import { execFileSync } from "node:child_process";
import { mkdirSync, readdirSync, statSync, writeFileSync, existsSync } from "node:fs";
import { join, dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const HERE = dirname(fileURLToPath(import.meta.url));
const ROOT = resolve(HERE, "..");

// Rely on PATH; brew installs to /opt/homebrew/bin on Apple Silicon.
const PDFTOTEXT = "pdftotext";
const PDFIMAGES = "pdfimages";
const PDFINFO = "pdfinfo";

const pdfPath = resolve(process.argv[2] ?? join(ROOT, "data/source/dgt_manual_b.pdf"));
if (!existsSync(pdfPath)) {
  console.error(`PDF not found at ${pdfPath}`);
  process.exit(1);
}

const outDir = join(ROOT, "data/source");
const pagesDir = join(outDir, "pages");
const imagesDir = join(outDir, "images");
mkdirSync(pagesDir, { recursive: true });
mkdirSync(imagesDir, { recursive: true });

function run(cmd, args) {
  return execFileSync(cmd, args, { encoding: "utf8", stdio: ["ignore", "pipe", "pipe"] });
}

console.log("→ Reading PDF metadata…");
const info = run(PDFINFO, [pdfPath]);
const pagesMatch = info.match(/Pages:\s+(\d+)/);
const pageCount = pagesMatch ? Number(pagesMatch[1]) : 0;
if (!pageCount) throw new Error("Could not determine page count from pdfinfo");
console.log(`  ${pageCount} pages`);

console.log("→ Extracting text per page…");
for (let p = 1; p <= pageCount; p++) {
  const out = join(pagesDir, `page-${String(p).padStart(3, "0")}.txt`);
  run(PDFTOTEXT, [
    "-layout",
    "-enc",
    "UTF-8",
    "-f",
    String(p),
    "-l",
    String(p),
    pdfPath,
    out,
  ]);
}
console.log(`  wrote ${pageCount} text files to data/source/pages/`);

console.log("→ Extracting images…");
run(PDFIMAGES, ["-all", "-p", pdfPath, join(imagesDir, "img")]);
const imageFiles = readdirSync(imagesDir).filter((f) => f.startsWith("img-"));
console.log(`  extracted ${imageFiles.length} image files to data/source/images/`);

// Build page-to-image index from pdfimages' -p naming: img-<pageNumber>-<index>.<ext>
const byPage = {};
for (const f of imageFiles) {
  const m = f.match(/^img-(\d+)-\d+\./);
  if (!m) continue;
  const page = Number(m[1]);
  (byPage[page] ??= []).push(f);
}

const index = {
  source: pdfPath.replace(ROOT + "/", ""),
  pageCount,
  images: byPage,
  extractedAt: new Date().toISOString(),
};
writeFileSync(join(outDir, "index.json"), JSON.stringify(index, null, 2));
console.log("→ Wrote data/source/index.json");
console.log("Done.");
