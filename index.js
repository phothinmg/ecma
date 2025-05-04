import fs from "node:fs/promises";
import { convert } from "lwe8-ascii";
//
const _indx = await fs.readFile("index.adoc", "utf8");
await fs.writeFile("index.html", convert(_indx).html);

