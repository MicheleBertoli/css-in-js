var gulp = require('gulp');
var babel = require("gulp-babel");
var rename = require("gulp-rename");
var style = require('gulp-react-statics-styles');
var runSequence = require('run-sequence');

gulp.task('babel', function() {
  return gulp.src('./button.js')
    .pipe(babel())
    .pipe(rename('bundle.js'))
    .pipe(gulp.dest('./'));
});

gulp.task('componentsCSS', function() {
  return gulp.src('./bundle.js')
    .pipe(style())
    .pipe(gulp.dest('./'));
});

gulp.task('default', function(callback) {
  runSequence('babel', 'componentsCSS', callback);
});
