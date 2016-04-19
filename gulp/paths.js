module.exports = {
    paths: {
        src: {
            template: ['src/**.**', '!src/assets/**/*'],
            scss: 'src/assets/scss/**/*.scss',
            js: 'src/assets/js/**/*.js',
            img: 'src/images/**/*'
        },
        dist: {
            cssDir: 'dist/assets/styles/',
            jsDir: 'dist/assets/scripts/',
            imgDir: 'dist/assets/images/'
        }
    }
};
