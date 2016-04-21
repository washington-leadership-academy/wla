var gulp = require('gulp');
var runSequence = require('run-sequence');
/**
 * Create a build task that also revisions assets
 */
gulp.task('build:deploy', function(done) {
  runSequence(
    'build',
    ['rev', 'revReplace', 'revReplaceRelativeImages'],
    done
  )
});
