import gulp from 'gulp';
import del from 'del';
import postcss from 'gulp-postcss';
import esCssModules from 'es-css-modules';

gulp.task('clean', () => {
  del([
    'dist',
    'src/styles',
  ]);
});

gulp.task('default', ['clean'], () => {
  gulp.src('styles/**/*.css')
    .pipe(postcss([
      esCssModules({
        jsFiles: 'src/App.js',
      }),
    ]))
    .pipe(gulp.dest('dist'));
});
