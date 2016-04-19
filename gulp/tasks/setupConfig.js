var gulp = require('gulp');
var replace = require('gulp-replace');
var config = require('../../config');
var paths = require('../paths');

/**
 * Pass project settings into template.conf
 */

gulp.task('setupConfig', function () {
  return gulp.src(paths.src.config)
    .pipe(replace("{{ siteurl }}", config.server.siteurl))
    .pipe(replace("{{ sandbox }}", config.server.sandbox))
    .pipe(gulp.dest(paths.dist.dir));
});
