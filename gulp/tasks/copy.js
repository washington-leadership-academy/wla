var gulp = require('gulp');
var livereload = require('gulp-livereload');
var paths = require('../paths');

/**
 * Copies all but sass and js files to dist
 */

gulp.task('copy', function() {
    return gulp.src(paths.src.files)
    .pipe(gulp.dest(paths.dist.dir))
    .pipe(livereload());
});
