import gulp from 'gulp';
import del from 'del';
import postcss from 'gulp-postcss';
import webpack from 'webpack';
import esCssModules from 'es-css-modules';

gulp.task('clean-css', () => (
  del([
    'dist',
  ])
));

gulp.task('css', ['clean-css'], () => (
  gulp.src('*.css')
    .pipe(postcss([
      esCssModules({
        jsFiles: './button.js',
      }),
    ]))
    .pipe(gulp.dest('dist'))
));

gulp.task('js', ['css'], (cb) => {
  webpack({
    entry: './button.js',
    output: {
      filename: './dist/bundle.js'
    },
    module: {
      loaders: [
        { test: /\.js$/, exclude: /node_modules/, loader: 'babel' },
      ],
    },
  }, cb);
})

gulp.task('default', ['css', 'js']);
