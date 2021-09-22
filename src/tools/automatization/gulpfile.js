const gulp = require('gulp');
const server = require('gulp-server-livereload');

gulp.task('build', function (callback) {
    console.log('Constructing site ...');
    setTimeout(callback, 1200);
});

gulp.task('serve', function (callback) {
    console.log('Initializing server ...');
    gulp.src('www')
        .pipe(server({
            livereload: true, 
            open: true
        }));
});

gulp.task('default', gulp.series('build', 'serve'));