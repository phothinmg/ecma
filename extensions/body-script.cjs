/**
 * @param {import("asciidoctor").Registry} registry
 */
module.exports = function (registry) {
  registry.blockMacro(function () {
    this.named("body_script");
    this.process(function (parent, target, attr) {
      const _html = `
        <script>
          const ${attr.name} = document.createElement("script");
          ${attr.name}.src = ${target};
          document.body.appendChild(${attr.name});
        </script>
       `;
      return this.createBlock(parent, "pass", _html, attr);
    });
  });
};
