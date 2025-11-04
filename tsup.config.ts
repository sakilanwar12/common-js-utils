import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["src/index.ts"],
  format: ["cjs", "esm"],
  dts: {
    resolve: true,
  },
  target: "es2018",
  splitting: false,
  sourcemap: true,
  clean: true,
  treeshake: true,
  minify: false,
  outDir: "dist",
  outExtension({ format }) {
    return {
      js: format === "cjs" ? ".js" : ".mjs",
    };
  },
});
