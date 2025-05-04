import fs from "node:fs/promises";
import { convert } from "lwe8-ascii";

const es5 = await fs.readFile("./docs/es5.adoc", "utf8");
await fs.writeFile("./app/es5.html", convert(es5).html);
