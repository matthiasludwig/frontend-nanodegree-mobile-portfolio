// Register gulp
var gulp = require('gulp');

// Include Plugins
var uglifycss = require('gulp-uglifycss');

// Tasks
gulp.task('css', function () {
  gulp.src('./**/*.css')
    .pipe(uglifycss({
      "maxLineLen": 80,
      "uglyComments": true
    }))
    .pipe(gulp.dest('views/css'));
});

// Default Task
gulp.task('default', ['css']);
