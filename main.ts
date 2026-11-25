import { mkdirSync, writeFileSync } from "node:fs";

const entry =
  "Please accept my resignation: I'd rather be unemployed than type 'sounds good' to one more calendar invite.";

try {
  mkdirSync("/output", { recursive: true });
  writeFileSync("/output/entry.txt", entry);
} catch {
  writeFileSync("entry.txt", entry);
}
