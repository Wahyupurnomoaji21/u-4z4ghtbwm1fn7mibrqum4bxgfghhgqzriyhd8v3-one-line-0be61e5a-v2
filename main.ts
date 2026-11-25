// One Line, One Laugh — v2 entry writer.
//
// Writes exactly one funny line to $MAKEFUN_OUTPUT_DIR/entry.txt.
// Node 22, no dependencies. The line is a fixed constant: there is no
// generation step, so the output is deterministic and byte-identical
// on every run.

import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

// The entry: an apology outsourced to AI, which then turns around and
// apologises for the apology itself. Role reversal is the punchline,
// and it lands on the very last words.
const LINE =
  "I asked AI to write my apology, and it apologized to me for how bad my apology was.";

// The bounty caps the line at 140 UTF-8 characters and forbids a
// whitespace-only line.
const MAX_LENGTH = 140;

function fail(message: string): never {
  throw new Error(`one-line-v2: ${message}`);
}

function outputDir(): string {
  const dir = process.env.MAKEFUN_OUTPUT_DIR;
  if (dir === undefined || dir.trim() === "") {
    return "/output";
  }
  // A relative output dir is resolved against this script's folder,
  // so the result never depends on the caller's working directory.
  if (dir.startsWith("/")) {
    return dir;
  }
  return join(dirname(fileURLToPath(import.meta.url)), dir);
}

function validate(line: string): void {
  if (line.trim() === "") {
    fail("entry line must not be blank");
  }
  if (line.includes("\n") || line.includes("\r")) {
    fail("entry line must be a single line");
  }
  if ([...line].length > MAX_LENGTH) {
    fail(`entry line is ${[...line].length} characters, over the ${MAX_LENGTH} limit`);
  }
}

function main(): void {
  validate(LINE);

  const dir = outputDir();
  const target = join(dir, "entry.txt");

  mkdirSync(dir, { recursive: true });
  writeFileSync(target, `${LINE}\n`, "utf8");
}

main();
