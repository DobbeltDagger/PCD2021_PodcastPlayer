const path = require('path');
import autoprefixer from 'autoprefixer';
// import postcss from 'postcss';
// import sass from 'rollup-plugin-sass';
// import scss from 'rollup-plugin-scss';
import postcss from 'rollup-plugin-postcss';
import babel from '@rollup/plugin-babel';
import copy from 'rollup-plugin-copy';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import { terser } from 'rollup-plugin-terser';

// `npm run build` -> `production` is true
// `npm run dev` -> `production` is false
const production = !process.env.ROLLUP_WATCH;

export default [
  //////////////////////////////////////////////////////
  // css compression howlerstyle.css
  {
    input: 'src/css/howlerstyle.css',
    output: {
      file: 'dist/css/howlerstyle-compressed.css',
    },
    plugins: [
      // https://www.npmjs.com/package/rollup-plugin-postcss
      postcss({
        plugins: [autoprefixer],
        minimize: true,
        extensions: ['.css'], // ['.sass','.css'],
        sourceMap: true,
        // extract: true, // if false, file becomes injection into head
        extract: path.resolve('./dist/css/howlerstyle-compressed.css') // extract is true when path is set!
      })  
    ]
  },
  //////////////////////////////////////////////////////
  // css compression style.css
  /*
  {
    input: 'src/css/style.css',
    output: {
      file: 'dist/css/style-compressed.css',
      // dir: 'dist/css/',
    },
    plugins: [
      // https://www.npmjs.com/package/rollup-plugin-postcss
      postcss({
        plugins: [autoprefixer],
        minimize: true,
        extensions: ['.css'], // ['.sass','.css'],
        sourceMap: true,
        // extract: true, // if false, file becomes injection into head
        extract: path.resolve('./dist/css/style-compressed.css') // extract is true when path is set!
      })  
    ]
  },
  */  
  ////////////////////////////////////////////////////// 
  // JS compression
  {
    input: 'src/index.js',
    output: {
      file: 'dist/bundle.js',
      format: 'iife', // immediately-invoked function expression — suitable for <script> tags
      sourcemap: true
    },
    plugins: [
      resolve(), // tells Rollup how to find date-fns in node_modules
      commonjs(), // converts date-fns to ES modules
      // babel({
      //   babelHelpers: 'bundled',
      //   exclude: 'node_modules/**'
      // }),      
      production && terser(), // minify, but only in production
      copy({
        targets: [
          { src: 'src/audio/**/*', dest: 'dist/audio' },
          { src: 'src/fonts/*', dest: 'dist/fonts' },
          // { src: 'src/css/*', dest: 'dist/css' },
          { src: 'src/js/libs/howler/**/*', dest: 'dist/js/libs/howler' },
          { src: 'src/js/libs/p5.min.js', dest: 'dist/js/libs' },
          { src: 'src/js/*.js', dest: 'dist/js' },
          { src: 'src/images/**/*', dest: 'dist/images' },
          { src: 'src/PCDcastRss.xml', dest: 'dist' },
        ]
      }),
    ]
  }
];