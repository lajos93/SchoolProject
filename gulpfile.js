




var gulp = require('gulp');
var minifyHtml = require("gulp-minify-html");

var sass = require('gulp-sass');

gulp.task('sass', function() {
    gulp.src('./source/scss/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./css/'))
});

//Watch task
gulp.task('sass:watch',function() {
    gulp.watch('./source/scss/*.scss',['sass']);
});

gulp.task('minify-html', function () {
    gulp.src('/source/html/*.html') // path to your files
    .pipe(minifyHtml())
    .pipe(gulp.dest('./build/'));
});

