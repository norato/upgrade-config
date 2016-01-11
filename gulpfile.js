var gulp = require('gulp');
var replace = require('gulp-replace');
var rename = require("gulp-rename");

gulp.task('upgrade-configs', function() {
  gulp.src(['Environment.example.config'])
    .pipe(rename('Environment.config'))

    // Keys to replace
    .pipe(replace(/foo/g, 'works'))
    .pipe(replace(/bar/g, 'works1'))
    

    .pipe(gulp.dest('.'));
});
