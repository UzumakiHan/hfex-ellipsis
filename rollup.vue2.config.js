
import resolve from '@rollup/plugin-node-resolve';
import vue2 from 'rollup-plugin-vue2';
import babel from '@rollup/plugin-babel';
import commonjs from '@rollup/plugin-commonjs';
import terser from '@rollup/plugin-terser';
import json from '@rollup/plugin-json';
import postcss from 'rollup-plugin-postcss'
import typescript from '@rollup/plugin-typescript';
import autoprefixer from 'autoprefixer'

export default [
    {
        input: './src/index.ts',
        output: [
            {
                file:'dist/vue2/cjs/index.js',
                format: "cjs",
                sourcemap: false,
                globals: {
                    vue: "Vue"
                }
            },
            {
                file: 'dist/vue2/esm/index.js',
                format: "es",
                sourcemap: false,
                globals: {
                    vue: "Vue"
                }
            }
        ],
        plugins: [
            resolve(),
            terser(),
            typescript({
                compilerOptions: { lib: ["es5", "es6", "dom"], target: "es5" },
                include: [
                    'typings/typing.d.ts',
                    'src/vue/index.ts'
                ],
                exclude: [
                    'node_modules',
                ]

            }),
            json(),
            vue2({
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
]