require('babel/register')({
  only: /\.jsx$/,
  optional: [
    'runtime',
    'es7.classProperties',
    'es7.decorators',
  ],
});

var gulp = require('gulp');
var babel = require("gulp-babel");
var revertPath = require('gulp-revert-path');
var styles = require('gulp-react-statics-styles');

gulp.task('componentsCSS', function() {
  return gulp.src('./button.jsx')
    .pipe(babel({
      stage: 0
    }))
    .pipe(revertPath())
    .pipe(styles())
    .pipe(gulp.dest('./'));
});
