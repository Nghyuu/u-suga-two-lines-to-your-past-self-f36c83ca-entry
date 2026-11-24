import { writeFileSync, mkdirSync, chmodSync } from "node:fs";
import { join } from "node:path";

const outDir = process.env.MAKEFUN_OUTPUT_DIR;
if (!outDir) throw new Error("MAKEFUN_OUTPUT_DIR is not set");

const line1 = "Don't tell your mum you're too busy to call back on the night she rings twice from the hospital car park.";
const line2 = "That missed call was the last time she asked for help before she stopped asking, and you spent the next year learning to ring first.";

const entry = line1 + "\n" + line2 + "\n";

mkdirSync(outDir, { recursive: true });
const outPath = join(outDir, "entry.txt");
writeFileSync(outPath, entry, "utf8");
chmodSync(outPath, 0o644);
