var gulp = require('gulp');
var replace = require('gulp-replace');

/**
 * The /assets/ folder caches files aggressively. This task targets each file
 * loaded up in the /assets/ folder and alters the URL to force a cache
 * invalidation on Squarespace's servers.
 */
gulp.task('invalidate-cached-assets', function () {
  var files = [
    'dist/*.region',
    'dist/collections/*.list',
    'dist/collections/*.item',
    'dist/blocks/*.block',
    'dist/pages/*.page'
  ];

  // Loops through selected files looking for things that are stored in /assets/
  // and busts the cache on these resources by adding a search parameter.
  return gulp.src(files)
    .pipe(replace(/\<link.*?href="assets\/([^\'\"]+)/g, function(match) {
      if ((/.*?href="http/i).test(match)) {
        return match;
      }

      if ((/\?v=[1-9].*/).test(match)) {
        return match.replace(/\?v=[1-9].*/, '?v=' + Date.now());
      }

      return match + '?v=' + Date.now();
    }))
    .pipe(replace(/\<.*?src="assets\/([^\'\"]+)/g, function(match) {
      if ((/.*?src="http"/i).test(match)) {
        return match;
      }

      if ((/\?v=[1-9].*/).test(match)) {
        return match.replace(/\?v=[1-9].*/, '?v=' + Date.now());
      }

      return match + '?v=' + Date.now();
    }))
    .pipe(gulp.dest('./'));
});
