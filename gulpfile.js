let gulp = require('gulp'),
    sass = require('gulp-sass'),
    autoprefixer = require('gulp-autoprefixer'),
    plumber = require('gulp-plumber'),
    cleanCSS = require('gulp-clean-css')

gulp.task('sass', () => {
    gulp.src('./modules/**/*.scss')
        .pipe(plumber())
        .pipe(sass())
        .pipe(autoprefixer())
        .pipe(cleanCSS())
        .pipe(gulp.dest('./build'));
});

gulp.task('watch', () => {
    gulp.watch('./modules/**/*.scss', ['sass']);
});

gulp.task('default', ['sass']);