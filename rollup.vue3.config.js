
import resolve from '@rollup/plugin-node-resolve';
import vue3 from 'rollup-plugin-vue3';
import babel from '@rollup/plugin-babel';
import commonjs from '@rollup/plugin-commonjs';
import terser from '@rollup/plugin-terser';
import json from '@rollup/plugin-json';
import postcss from 'rollup-plugin-postcss'
import typescript from '@rollup/plugin-typescript';
import autoprefixer from 'autoprefixer'

import path from 'path'
import { createRequire } from 'module';
const require = createRequire(import.meta.url);

const pkg = require(path.resolve(`package.json`))

export default {
    input: './src/index.ts',
    output: [
        {
            file: pkg.main,
            format: "cjs",
            globals: {
                vue: "Vue"
            }
        },
        {
            file: pkg.module,
            format: "es",
            globals: {
                vue: "Vue"
            }
        }
    ],
    plugins: [
        resolve(),
        terser(),
        typescript({
            compilerOptions: {lib: ["es5", "es6", "dom"], target: "es5"},
           include: [
               'typings/typing.d.ts',
               'src/vue/index.ts'
           ],
           exclude: [
               'node_modules',
           ]
          
       }),
        json(),
        vue3({
            css: true,
            compilerTemplate: true,
            preprocessStyles: true
        }),
        babel({
            babelHelpers: 'runtime',
            exclude: "**/node_modules/**"
        }),
        commonjs(),
        postcss({
            plugins: [
              autoprefixer(),
            ]
          })
    ]
}