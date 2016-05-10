// Register gulp
var gulp = require('gulp');

// Include Plugins
var uglifycss = require('gulp-uglifycss');

var dir = {
 app: '/',
 dest: 'build',
};

// Tasks
gulp.task('css', function () {
  gulp.src('./css/*.css')
    .pipe(uglifycss({
      "maxLineLen": 80,
      "uglyComments": true
    }))
    .pipe(gulp.dest(dir.dest + '/css'));
});

// Default Task
gulp.task('default', ['css']);
