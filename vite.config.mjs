import fg from "fast-glob";
import { parse, resolve } from "node:path";
import postcss from "rollup-plugin-postcss";
import postcssLit from "rollup-plugin-postcss-lit";
import { defineConfig } from "vite";

const components = "src/**/!(index|types|*.d).ts";
const tests = "**/test/**";

const componentEntries = fg
  .sync(components, { ignore: [tests] })
  .reduce((acc, filePath) => {
    const name = parse(filePath).name;
    acc[name] = resolve(__dirname, filePath);
    return acc;
  }, {});

export default defineConfig({
  build: {
    sourcemap: false,
    minify: false,
    lib: {
      entry: {
        ...componentEntries,
      },
      formats: ["es"],
    },
    rollupOptions: {
      external: [/^lit/],
    },
  },
  esbuild: {
    minifyIdentifiers: false,
  },
  plugins: [
    postcss({
      inject: false,
    }),
    postcssLit(),
  ],
});
