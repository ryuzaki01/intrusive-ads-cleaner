'use strict';

var del = require('del');
var gulp = require('gulp');
var util = require('gulp-util');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var livereload = require('gulp-livereload');
var sourcemaps = require('gulp-sourcemaps');
require('dotenv').load({path: '.env'});

/*
 * Create variables for our project paths so we can change in one place
 */
var paths = {
  src: ['package.json'],
  file: './intrusiveAdsCleaner.js',
  minFile: './intrusiveAdsCleaner.min.js'
};

// You can use multiple globbing patterns as you would with `gulp.src`
gulp.task('cleanClientScript', function (cb) {
  return del([
    paths.minFile
  ], cb);
});

gulp.task('clientScript', ['cleanClientScript'], function () {
  var task = gulp.src(paths.file)
    .pipe(sourcemaps.init({loadMaps: true}))
    .pipe(uglify().on('error', util.log));
  if (process.env.NODE_ENV === 'development') {
    task = task.pipe(sourcemaps.write('./'));
  }
  task
    .pipe(rename({
      suffix: '.min'
    }))
    .pipe(gulp.dest('./'));
});

// ------------------------------------
// Watch tasks
// ------------------------------------
gulp.task('watch', function () {
  livereload.listen();
  return gulp.watch(paths.file, ['clientScript']);
});

gulp.task('build', ['clientScript']);

// Default task for local environment
gulp.task('default', ['build']);
