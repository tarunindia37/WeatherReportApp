var gulp = require('gulp');
var eslint = require('gulp-eslint');

gulp.task('lint', function () {
  return gulp.src(['app/**/*.js'])
    .pipe(eslint())
    .pipe(eslint.format())
    .pipe(eslint.failAfterError());
});

gulp.task('default', ['lint']);
