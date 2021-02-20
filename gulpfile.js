// 定数の設定
const {src, dest, watch, series, parallel } = require('gulp');
const pug = require('gulp-pug');
const sass = require('gulp-sass');
const plumber = require('gulp-plumber');
const notify = require('gulp-notify');
const browserSync = require('browser-sync');
const concatCss = require('gulp-concat-css');

// パスの設定
const paths = {
    root: 'src/',
    dist: 'dist/',
    pug: 'src/**/*.pug',
    assetsPug: 'src/assets/**/*.pug',
    html: 'dist/',
    sass: 'src/assets/styles/**/*.scss',
    css: 'dist/assets/styles/',
    srcJs: 'src/assets/js/**/*.js',
    distJs: 'dist/assets/js/',
}

// pug
const Pug = (done) => {
    return src([paths.pug, '!' + paths.assetsPug])
        .pipe(
        plumber({ errorHandler: notify.onError('Error: <%= error.message %>') })
        )
        .pipe(
            pug({
                basedir: paths.root,
                pretty: true,
            })
        )
        .pipe(dest(paths.html));
    done();
}

// sass
const Sass = (done) => {
    return src(paths.sass)
      .pipe(
        plumber({ errorHandler: notify.onError('Error: <%= error.message %>') })
      )
      .pipe(sass({
          outputStyle: 'expanded',
      }))
      .pipe(concatCss('styles.css', {
          rebaseUrls: false,
      }))
      .pipe(dest(paths.css));
    done();
}

// js
const Js = (done) => {
    return src(paths.srcJs)
        .pipe(dest(paths.distJs));
    done();
}

// browserSync
const BrowserSync = (done) => {
    return browserSync.init({
        server: {
            baseDir: paths.dist
        },
        reloadOnRestart: true
    });
}

// browserSync reload
const Reload = (done) => {
    browserSync.reload();
    done();
};

// npx gulpでの操作
exports.default = () => {
    watch([paths.pug, paths.assetsPug], series(Pug, Reload));
    watch(paths.sass, series(Sass, Reload));
    watch(paths.srcJs, series(Js, Reload));
    BrowserSync();
}
exports.build = parallel(Pug, Sass);