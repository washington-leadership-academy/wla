var gulp = require('gulp');
var revReplace = require('gulp-rev-replace');
var paths = require('../paths');

/**
 * Rewrite references of revisioned files
 */
gulp.task('revReplace', ['rev'], function() {
  var manifest = gulp.src(paths.dist.dir +'/rev-manifest.json')

  return gulp.src(paths.dist.files)
    .pipe(revReplace({
      manifest: manifest,
      replaceInExtensions: ['.region', '.block', '.page', '.list', '.item', '.js', '.css']
    }))
    .pipe(gulp.dest(paths.dist.dir));
});
