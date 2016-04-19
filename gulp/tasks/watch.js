var gulp = require('gulp');
var batch = require('gulp-batch');
var watch = require('gulp-watch');
var livereload = require('gulp-livereload');

// Watches for changes to certain files and builds the site accordingly.

gulp.task('watch', function() {
  livereload.listen();

  watch('src/assets/**/*.scss', batch(function (events, done) {
    gulp.start('sass', done);
  }));

  watch('src/assets/**/*.js', batch(function (events, done) {
    gulp.start('browserify', done);
  }));

  watch('src/template.conf', batch(function (events, done) {
    gulp.start('setupConfig', done);
  }));

  watch(['src/**/**.**', '!src/assets/scss/**/*', '!src/assets/js/**/*', '!src/template.conf'], batch(function (events, done) {
    gulp.start('copy', done);
  }));
});
