var gulp = require('gulp');
var postcss = require('gulp-postcss');
var tailwindcss = require('tailwindcss');
var sass = require('gulp-sass');
var autoprefixer = require('autoprefixer');
var cssnano = require('cssnano');

// Run:
// gulp sass
// Complies sass only once
gulp.task('sass', function() {
    var processors = [
        tailwindcss,
        autoprefixer,
        cssnano
    ];
    return gulp.src('./scss/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(postcss(processors))
    .pipe(gulp.dest('./css'));
});

// Run:
// gulp watch
// Starts watcher and keeps compiling the css file as you make changes
gulp.task('watch', function () {
    gulp.watch("./**/*.scss", gulp.series('sass'));
});