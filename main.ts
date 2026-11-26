// Fortune Cookie Funnies for Engineers
// Writes one fortune cookie message to /output/entry.txt
import { mkdirSync, writeFileSync } from "node:fs";

const line =
  "You will deploy on Friday. The bug you fear most already knows your name, and the tests are lying.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line + "\n", "utf8");
console.log(line);
