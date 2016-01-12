var gulp = require('gulp');
var replace = require('gulp-replace-task');
var rename = require("gulp-rename");
var hash = require('./local.json');

var prefix = /\$\{/;
var sufix = /\}/;

var values = [];

gulp.task('upgrade-configs', function() {
  buildIt();
  gulp.src(['Environment.example.config'])
    .pipe(rename('Environment.config'))
    .pipe(replace({
      patterns: values
    }))
    .pipe(gulp.dest('.'));
});

function buildIt() {
  hash.forEach(function (element) {
    values.push(
      {
        "match": buildRegex(element),
        "replacement": element.value
      }
    );
  });
}

function buildRegex (element) {
  return new RegExp(prefix.source + element.key + sufix.source)
}