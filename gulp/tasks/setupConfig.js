var gulp = require('gulp');
var replace = require('gulp-replace');
var config = require('../../config');

/**
 * Pass project settings into template.conf
 */

gulp.task('setupConfig', function () {
  return gulp.src('src/template.conf')
    .pipe(replace("{{ siteurl }}", config.server.siteurl))
    .pipe(replace("{{ sandbox }}", config.server.sandbox))
    .pipe(gulp.dest('dist/'));
});
