var gulp = require('gulp');
var fs = require('fs');
var del = require('del');
var mkdirp = require('mkdirp');
var paths = require('../paths');

/**
 * Removes everything from dist except git files
 * Builds empty dist/styles and dist/scripts (required for squarespace server)
 */
gulp.task('clean', function(){
  var squarespaceCssDir = paths.dist.dir + '/styles/';
  var squarespaceJsDir = paths.dist.dir + '/scripts/';
  del.sync(paths.dist.files);
  mkdirp.sync(squarespaceCssDir);
  mkdirp.sync(squarespaceJsDir);
  fs.writeFileSync(squarespaceCssDir + '.gitkeep', '');
  fs.writeFileSync(squarespaceJsDir + '.gitkeep', '');
});
