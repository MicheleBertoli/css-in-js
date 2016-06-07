import gulp from 'gulp';
import del from 'del';
import postcss from 'gulp-postcss';
import esCssModules from 'es-css-modules';

gulp.task('clean', () => {
  del([
    'dist',
  ]);
});

gulp.task('default', ['clean'], () => {
  gulp.src('*.css')
    .pipe(postcss([
      esCssModules({
        jsFiles: './button.js',
      }),
    ]))
    .pipe(gulp.dest('dist'));
});
