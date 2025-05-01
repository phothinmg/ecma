/**
 * @param {import("asciidoctor").Registry} registry
 */
module.exports = function (registry) {
  registry.block(function () {
    this.named("playground");
    this.process(function (parent, reader, attr) {
      const lines = reader.getLines();
      const html = `
          <div class="code-playground">
           <code-playground layout="stack" show-line-numbers autorun="never">
              <div slot="javascript">${lines.join("\n")}</div>
           </code-playground>
          <div>`;
      return this.createBlock(parent, "pass", html, attr, {});
    });
  });
};
