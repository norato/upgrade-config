var gulp = require('gulp');
var replace = require('gulp-replace-task');
var rename = require("gulp-rename");

var values = [
  {
    "match": /\$\{foo\}/,
    "replacement": "works"
  },
  {
    "match": /\$\{bar\}/,
    "replacement": "works1"
  }
];

gulp.task('upgrade-configs', function() {
  gulp.src(['Environment.example.config'])
    .pipe(rename('Environment.config'))
    .pipe(replace({
      patterns: values
    }))
    .pipe(gulp.dest('.'));
});