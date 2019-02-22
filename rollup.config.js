import babel from 'rollup-plugin-babel';
import {uglify} from 'rollup-plugin-uglify';

export default {
    input: 'src/main.js',
    output: {
        file: process.env.NODE_ENV === "production"?'lib/rollup.min.js':'lib/rollup.js',
        format: 'umd',
        name: 'xkh'
    },
    plugins: [
        babel({
            exclude: 'node_modules/**'
        }),
        process.env.NODE_ENV === "production" && uglify()
    ]
};