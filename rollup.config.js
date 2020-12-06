import babel from "@rollup/plugin-babel"
import { uglify } from "rollup-plugin-uglify"

export default {
    input: "dist/date-object.js",
    output: [
        { file: "dist/date-object.es5.js", },
        {
            file: "dist/date-object.min.js",
            plugins: [uglify()]
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
