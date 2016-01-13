'use strict';

import gulp    from 'gulp'
import replace from 'gulp-replace-task'
import rename  from 'gulp-rename'
import hash    from './local.json'
import del     from "del"

let values = []

gulp.task('default', ['clear','upgrade'])

gulp.task('upgrade', () => {
  buildIt();
  gulp.src(['Environment.example.config'])
    .pipe(rename('Environment.config'))
    .pipe(replace({
      patterns: values
    }))
    .pipe(gulp.dest('.'))
})

gulp.task('clear',() =>{
  del(['Environment.config'])
})

var buildIt = () =>{
  hash.forEach((element) => {
    values.push(
      {
        "match": buildRegex(element),
        "replacement": element.value
      }
    )
  })
}

var buildRegex = (element) => {
  let prefix = /\$\{/;
  let sufix = /\}/;
  return new RegExp(prefix.source + element.key + sufix.source)
}