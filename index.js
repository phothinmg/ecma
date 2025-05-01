import asciidoctor from "asciidoctor";
import fs from "node:fs";
import { createRequire } from "node:module";
const ascii = asciidoctor();
const require = createRequire(import.meta.url);
/**
 * @param {string | Buffer} text
 * @param {import("asciidoctor").ProcessorOptions} [opts]
 * @returns {string | Document}
 */
const converter = (text, opts) => ascii.convert(text, opts);
const registry = ascii.Extensions.create();
require("./extensions/code-playground.cjs")(registry);
require("./extensions/head-script.cjs")(registry);
require("./extensions/body-script.cjs")(registry);

const txt = fs.readFileSync("index.adoc", "utf8");
const _html = converter(txt, {
  standalone: true,
  safe: "safe",
  extension_registry: registry,
});

fs.writeFileSync("index.html", _html);
