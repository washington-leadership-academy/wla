var gulp = require('gulp');
var browserify = require('browserify');
var babelify = require('babelify');
var fs = require('fs');
var transform = require('vinyl-transform');
var source = require('vinyl-source-stream');
var livereload = require('gulp-livereload');

/**
 * Compiles es6 code into a browserify bundle.
 */
gulp.task('browserify', function () {
  fs.readdirSync('src/assets/js').forEach(function(file) {
    if (file.indexOf('.js') === -1) {
      return;
    }

    browserify('src/assets/js/' + file, { debug: true })
      .transform(babelify)
      .bundle()
      .pipe(source(file))
      .pipe(gulp.dest('dist/assets/scripts/'))
      .pipe(livereload());
  });
});
