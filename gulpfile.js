// 定数の設定
const {src, dest, watch, series, parallel } = require('gulp');
const sass = require('gulp-sass');
const plumber = require('gulp-plumber');
const notify = require('gulp-notify');

// パスの設定
const paths = {
    root: 'dist/',
    sass: 'src/assets/styles/**/*.scss',
    css: 'dist/assets/styles/',
}

// sass
const css = () => {
    return src(paths.sass)
      .pipe(
        plumber({ errorHandler: notify.onError('Error: <%= error.message %>') })
      )
      .pipe(sass())
      .pipe(dest(paths.css))
}

exports.default = () => {
    watch(paths.sass, css)
}