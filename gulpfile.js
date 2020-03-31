const gulp = require('gulp');
const concat = require('gulp-concat');
const autoprefixer = require('gulp-autoprefixer');
const cleanCSS = require('gulp-clean-css');
const uglify = require('gulp-uglify');
const del = require('del');
const browsersSync = require('browser-sync').create();
const sourcemaps = require('gulp-sourcemaps');
const sass = require('gulp-sass');
// const less = require('gulp-less');
const imagemin = require('gulp-imagemin');
const plugin = require('gulp-load-plugins')();
plugin.imagemin.mozjpeg = require('imagemin-mozjpeg');
plugin.imagemin.pngquant = require('imagemin-pngquant');

const styleFiles = [
    './src/scss/main.scss'
 ]

const scriptsFiles = [
    './src/js/main.js',
    './src/js/forms.js',
    './src/js/map.js',
    './src/js/responsive.js',
    './src/js/scroll.js'
]

const scriptLibs = [
    './src/js/jquery-3.4.1.min.js',
    './src/js/jquery.nicescroll.min.js',
    './src/js/jquery.lazy.min.js'
]

gulp.task('styles', () => {
    return gulp.src(styleFiles)
    .pipe(sourcemaps.init())
    .pipe(sass())
    .pipe(concat('style.css'))
    .pipe(autoprefixer({
        overrideBrowserslist: ['last 5 versions'],
        cascade: false
    }))
    .pipe(cleanCSS({
        level: 2
    }))
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest('./build/css'))
    .pipe(browsersSync.stream());
});

gulp.task('scripts', () => {
    return gulp.src(scriptsFiles)
     .pipe(concat('script.js'))
     .pipe(uglify({
        toplevel: true
        }))
    .pipe(gulp.dest('./build/js'))
    .pipe(browsersSync.stream());
});

gulp.task('scriptsLibs', () => {
    return gulp.src(scriptLibs)
    
    .pipe(gulp.dest('./build/js'))
    .pipe(browsersSync.stream());
});

gulp.task('del', () => {
    return del(['build/*'])
});

gulp.task('img-compress', () => {
     return gulp.src('./src/img/**')
      .pipe(plugin.imagemin([
            plugin.imagemin.gifsicle({interlaced: true}),
            plugin.imagemin.jpegtran({progressive: true}),
            plugin.imagemin.mozjpeg({progressive: true}),
            plugin.imagemin.optipng({optimizationLevel: 7}),
            plugin.imagemin.pngquant({quality: [0.3, 0.5]}),
            // plugin.imagemin.svgo({plugins: [{removeViewBox: true}]})
          ]))
        .pipe(gulp.dest('./build/img/'))
        .pipe(browsersSync.stream());
});

gulp.task('watch', () => {
    browsersSync.init({
        server: {
            baseDir: "./"
        }
    });
    gulp.watch('./src/img/**', gulp.series('img-compress'))
    // gulp.watch('./src/css/**/*.css', styles)
    gulp.watch('./src/scss/**/*.scss', gulp.series('styles'))
    gulp.watch('./src/scss/**/*.sass', gulp.series('styles'))
    // gulp.watch('./src/less/**/*.less', gulp.series('styles'))
    gulp.watch('./src/js/**/*.js', gulp.series('scripts'))
    gulp.watch('./src/js/**/*.js', gulp.series('scriptsLibs'))
    gulp.watch("./*.html").on('change', browsersSync.reload);
});

gulp.task('default', gulp.series('del', gulp.parallel('styles', 'scripts', 'scriptsLibs', 'img-compress'), 'watch'));