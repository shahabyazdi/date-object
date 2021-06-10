import babel from "@rollup/plugin-babel";
import commonjs from "@rollup/plugin-commonjs";
import fs from "fs";
import { terser } from "rollup-plugin-terser";

export default [
  {
    input: "index.js",
    output: [
      {
        file: "dist/cjs/date-object.es6.js",
        format: "cjs",
        exports: "default",
      },
    ],
    plugins: [commonjs()],
  },
  {
    input: "index.js",
    output: [
      {
        file: "dist/cjs/date-object.es5.js",
        format: "cjs",
        exports: "default",
      },
      {
        file: "dist/cjs/date-object.es5.min.js",
        format: "cjs",
        plugins: [terser()],
        exports: "default",
      },
      {
        file: "dist/es/date-object.module.js",
        format: "es",
        plugins: [terser()],
        exports: "default",
      },
      {
        file: "dist/umd/date-object.min.js",
        format: "umd",
        plugins: [terser()],
        name: "DateObject",
        exports: "default",
      },
    ],
    plugins: [
      commonjs(),
      babel({
        exclude: /node_modules/,
        presets: [
          "@babel/preset-env",
          { plugins: ["@babel/plugin-proposal-class-properties"] },
        ],
      }),
    ],
  },
  ...get("calendars"),
  ...get("locales"),
];

function get(path) {
  const array = fs
    .readdirSync(`./${path}/cjs`)
    .filter((file) => file.endsWith(".js"))
    .map((file) => file.replace(/\.js$/, ""));

  return array.map((name) => ({
    input: `${path}/cjs/${name}.js`,
    output: [
      {
        file: `${path}/es/${name}.js`,
        format: "es",
        exports: "default",
      },
      {
        file: `${path}/umd/${name}.js`,
        format: "umd",
        name: name,
        exports: "default",
      },
      {
        file: `${path}/umd/${name}.min.js`,
        format: "umd",
        plugins: [terser()],
        name: name,
        exports: "default",
      },
    ],
    plugins: [commonjs()],
  }));
}
