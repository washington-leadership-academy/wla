var gulp = require('gulp');
var batch = require('gulp-batch');
var watch = require('gulp-watch');
var livereload = require('gulp-livereload');
var paths = require('../paths');

// Watches for changes to certain files and builds the site accordingly.

gulp.task('watch', function() {
  livereload.listen();

  watch(paths.src.scss, batch(function (events, done) {
    gulp.start('sass', done);
  }));

  watch(paths.src.js, batch(function (events, done) {
    gulp.start('browserify', done);
  }));

  watch(paths.src.config, batch(function (events, done) {
    gulp.start('setupConfig', done);
  }));

  watch(paths.src.files, batch(function (events, done) {
    gulp.start('copy', done);
  }));
});
