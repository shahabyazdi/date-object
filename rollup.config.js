import babel from "@rollup/plugin-babel";
import commonjs from "@rollup/plugin-commonjs";
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
        file: "dist/date-object.min.js",
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
];
