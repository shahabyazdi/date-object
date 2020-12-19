import babel from "@rollup/plugin-babel"
import { terser } from "rollup-plugin-terser"

export default [
    {
        input: "index.js",
        output: [
            {
                file: "dist/cjs/date-object.es6.js",
                format: "cjs",
                exports: "default"
            }
        ]
    },
    {
        input: "index.js",
        output: [
            {
                file: "dist/cjs/date-object.es5.js",
                format: "cjs",
                exports: "default"
            },
            {
                file: "dist/cjs/date-object.es5.min.js",
                format: "cjs",
                plugins: [terser()],
                exports: "default"
            },
            {
                file: "dist/date-object.min.js",
                format: "umd",
                plugins: [terser()],
                name: "DateObject",
                exports: "default"
            }
        ],
        plugins: [
            babel({
                exclude: /node_modules/,
                presets: [
                    "@babel/preset-env",
                    { "plugins": ["@babel/plugin-proposal-class-properties"] }
                ]
            })
        ]
    }
]

