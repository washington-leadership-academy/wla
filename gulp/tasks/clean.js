var gulp = require('gulp');
var fs = require('fs');
var del = require('del');
var mkdirp = require('mkdirp');

/**
 * Removes everything from dist except git files
 * Builds empty dist/styles and dist/scripts (required for squarespace server)
 */
gulp.task('clean', function(){
  del.sync([
    'dist/**',
    '!dist',  
    '!dist/.git',
    '!dist/.gitignore',
    '!dist/.gitkeep']
  );
  mkdirp.sync('dist/styles');
  mkdirp.sync('dist/scripts');
  fs.writeFileSync('dist/styles/.gitkeep', '');
  fs.writeFileSync('dist/scripts/.gitkeep', '');
});
