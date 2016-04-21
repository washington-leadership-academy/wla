var gulp = require('gulp');
var revReplace = require('gulp-rev-replace');
var paths = require('../paths');

/**
 * Rewrite relative references of revisioned images in compiled css
 */
gulp.task('revReplaceRelativeImages', ['rev'], function() {
  var manifest = gulp.src(paths.dist.dir +'/rev-manifest.json')
  
  function replaceIfImage(filename) {
      if (filename.indexOf('assets/images') > -1) {
          return filename.replace('assets/images', '../images');
      }
      return filename;
  }

  return gulp.src(paths.dist.assets)
    .pipe(revReplace({
      manifest: manifest,
      replaceInExtensions: ['.css'],
      modifyUnreved: replaceIfImage,
      modifyReved: replaceIfImage
    }))
    .pipe(gulp.dest(paths.dist.assetsDir));
});
