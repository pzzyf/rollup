/**
 * @type { import('rollup').RollupOptions }
 */

const buildOptions = {
  input: ["src/index.js"],
  output: [
    {
      dir: "dist/es",
      format: "esm",
    },
    {
      dir: "dist/es",
      format: "cjs",
    },
  ],
};

export default buildOptions;
