var gulp = require('gulp');
var livereload = require('gulp-livereload');

/**
 * Copies all but sass and js files to dist
 */

gulp.task('copy', function() {
    return gulp.src(['src/**/**.**', '!src/assets/scss/**/*', '!src/assets/js/**/*', '!src/template.conf'])
    .pipe(gulp.dest('dist/'))
    .pipe(livereload());
});
