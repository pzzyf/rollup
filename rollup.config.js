/**
 * @type { import('rollup').RollupOptions }
 */

const buildOptions = {
  input: ["src/index.js"],
  output: {
    dir: "dist/es",
    format: "esm",
  },
};

export default buildOptions;
