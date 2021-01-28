import autoprefixer from 'autoprefixer';
import postcss from 'postcss';
import sass from 'rollup-plugin-sass';
// import scss from 'rollup-plugin-scss';
import copy from 'rollup-plugin-copy';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import { terser } from 'rollup-plugin-terser';

// `npm run build` -> `production` is true
// `npm run dev` -> `production` is false
const production = !process.env.ROLLUP_WATCH;

export default {
  input: 'src/index.js',
  output: {
    file: 'dist/bundle.js',
    format: 'iife', // immediately-invoked function expression — suitable for <script> tags
    sourcemap: true
  },
  plugins: [
    postcss({
      preprocessor: (content, id) => new Promise((resolve, reject) => {
        const result = sass.renderSync({ file: id })
        resolve({ code: result.css.toString() })
      }),
      plugins: [
        autoprefixer
      ],
      sourceMap: true,
      extract: true,
      extensions: ['.sass','.css']
    }),    
    copy({
      targets: [
        { src: 'src/audio/**/*', dest: 'dist/audio' },
        { src: 'src/fonts/*', dest: 'dist/fonts' },
        { src: 'src/css/*', dest: 'dist/css' },
        { src: 'src/js/libs/howler/**/*', dest: 'dist/js/libs/howler' },
        { src: 'src/js/*', dest: 'dist/js' },
        { src: 'src/images/**/*', dest: 'dist/images' }
      ]
    }),
    resolve(), // tells Rollup how to find date-fns in node_modules
    commonjs(), // converts date-fns to ES modules
    production && terser() // minify, but only in production
  ]
};