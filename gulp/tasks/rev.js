var gulp = require('gulp');
var rev = require('gulp-rev');
var paths = require('../paths');

/**
 * Revisions built static assets and outputs them in the same directory
 */
gulp.task('rev', ['sass', 'browserify'], function() {
  return gulp.src(paths.dist.assets, { base: paths.dist.dir })
    .pipe(rev())
    .pipe(gulp.dest(paths.dist.dir))
    .pipe(rev.manifest())
    .pipe(gulp.dest(paths.dist.dir));
});
