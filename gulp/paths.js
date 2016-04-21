module.exports = {
  src: {
    scss: 'src/assets/scss/**/*.scss',
    js: 'src/assets/js/**/*.js',
    jsDir: 'src/assets/js',
    config: 'src/template.conf',
    files: [
      'src/**/**.**',
      '!src/assets/scss/**/*',
      '!src/assets/js/**/*',
      '!src/template.conf'
    ]
  },
  dist: {
    dir: 'public',
    cssDir: 'public/assets/styles',
    jsDir: 'public/assets/scripts',
    assets: 'public/assets/**/*',
    assetsDir: 'public/assets',
    files: [
      'public/**',
      '!public',  
      '!public/.git',
      '!public/.gitignore',
      '!public/.gitkeep'
    ]
  }
};
