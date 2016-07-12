'use strict'

var path = require('path');
var gulp = require('gulp');
var conf = require('./conf');
var gulpNgConfig = require('gulp-ng-config');
var rename = require('gulp-rename');

// create cont file 
gulp.task('generate', function() {
	return gulp.src('gulp/constants.json')
  .pipe(gulpNgConfig('seb.constants', { environment: 'prod' }))
  .pipe(gulp.dest(conf.paths.tmp));
});

gulp.task('rename', function() {
	return gulp.src(path.join(conf.paths.tmp, 'constants.js'))
		.pipe(rename('index.custom.js'))
		.pipe(gulp.dest(path.join(conf.paths.src, 'app')));
});

gulp.task('constants', ['generate', 'rename']);
