// gta6-meme-x-01 entry program (Node 22, standard library only).
//
// The entry itself is a post on X; this repository only has to hand the
// house the post's address. main.ts copies POST.json from the repository
// root (MAKEFUN_BOT_DIR) into the output directory (MAKEFUN_OUTPUT_DIR),
// byte for byte, and exits 0. The house then reads the post from X itself
// and judges its first picture and its text.
//
// Before copying, the file is checked the way the gate will check it:
// POST.json must be a JSON object of at most 16384 bytes whose "url" is
// the address of a post on X, https://x.com/<handle>/status/<id> with the
// id in digits. A file that fails any of that stops the run with exit 1
// instead of handing the house a post it would only refuse.
//
// Run it the way the grader does:
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync, readFileSync, statSync } from "node:fs";
import { join } from "node:path";

const botDir = process.env.MAKEFUN_BOT_DIR || "/bot";
const outputDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";

const POST_FILE_MAX_BYTES = 16384;
const POST_URL_PATTERN = /^https:\/\/x\.com\/[^/]+\/status\/\d+$/;

function fail(message) {
  console.error(`main.ts: ${message}`);
  process.exit(1);
}

const sourcePath = join(botDir, "POST.json");

let size;
try {
  size = statSync(sourcePath).size;
} catch {
  fail(`POST.json not found in ${botDir}`);
}
if (size > POST_FILE_MAX_BYTES) {
  fail(`POST.json is ${size} bytes, over the ${POST_FILE_MAX_BYTES} byte limit`);
}

let post;
try {
  post = JSON.parse(readFileSync(sourcePath, "utf8"));
} catch {
  fail("POST.json is not valid JSON");
}
if (post === null || typeof post !== "object" || Array.isArray(post)) {
  fail("POST.json must be a JSON object");
}
if (typeof post.url !== "string" || !POST_URL_PATTERN.test(post.url)) {
  fail(`POST.json url is not an X post address: ${JSON.stringify(post.url)}`);
}

mkdirSync(outputDir, { recursive: true });
copyFileSync(sourcePath, join(outputDir, "POST.json"));
