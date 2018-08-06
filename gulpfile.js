const gulp = require('gulp');
const sass = require('gulp-sass');
const postcss = require('gulp-postcss');
const tailwindcss = require('tailwindcss');
const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');

gulp.task('sass', function () {
    return gulp.src('src/sass/**/*.scss')
      .pipe(sass().on('error', sass.logError))
      .pipe(postcss([tailwindcss('./tailwind.js'),autoprefixer,cssnano]))
      .pipe(gulp.dest('./css'));
  });
   
  gulp.task('sass:watch', function () {
    gulp.watch('src/sass/**/*.scss', ['sass']);
  });