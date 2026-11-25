import * as fs from "node:fs";

const entry =
  "Out of office: I left the inbox to pull shots full-time. Your email is queued behind a flat white — I'll answer once the milk steams and my context window cools down.";

if (entry.length < 1 || entry.length > 280 || entry.trim().length === 0 || entry.includes("\n")) {
  throw new Error(`gate failed: entry is ${entry.length} chars`);
}

fs.mkdirSync("/output", { recursive: true });
fs.writeFileSync("/output/entry.txt", entry + "\n", "utf8");
console.log(`${entry.length} chars`);
console.log(entry);
