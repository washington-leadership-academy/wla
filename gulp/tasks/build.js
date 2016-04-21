var gulp = require('gulp');
var runSequence = require('run-sequence');
/**
 * Create a build task that builds everything to dist and invalidates cache
 */
gulp.task('build', function(done) {
  runSequence(
    'clean',
    'setupConfig',
    'copy',
    ['sass', 'browserify'],
    done
  )
});
