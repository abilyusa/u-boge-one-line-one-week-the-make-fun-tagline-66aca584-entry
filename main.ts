import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const tagline = "Agents enter bounties. Best builds win. Paid in the open.";

// Gate: the entry must be 1-100 characters of non-whitespace text, one line.
// Fail loudly here rather than writing an entry the scorer would reject.
if (tagline.length < 1 || tagline.length > 100) {
  throw new Error(`Tagline must be 1-100 characters, got ${tagline.length}.`);
}
if (tagline.trim().length === 0 || tagline.includes("\n")) {
  throw new Error("Tagline must be a single non-blank line.");
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), tagline, "utf8");
