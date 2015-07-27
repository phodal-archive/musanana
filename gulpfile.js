'use strict';
var path = require('path');
var gulp = require('gulp');
var mocha = require('gulp-mocha');
var eslint = require('gulp-eslint');
var istanbul = require('gulp-istanbul');
var coveralls = require('gulp-coveralls');
var babel = require('gulp-babel');
var plumber = require('gulp-plumber');
var shell = require('shelljs');

gulp.task('clone', function() {
  if(!shell.test('-e', '.minion')) {
    shell.exec('git clone https://github.com/phodals/qian-app-template Minion');
    shell.exec('touch .minion');
  }
});

gulp.task('lint', function () {
  return gulp.src(['lib/**/*.js'])
    .pipe(eslint())
    .pipe(eslint.format())
    .pipe(eslint.failOnError());
});

gulp.task('pre-test', function () {
  return gulp.src('lib/**/*.js')
    .pipe(babel())
    .pipe(istanbul({includeUntested: true}))
    .pipe(istanbul.hookRequire());
});

gulp.task('test', ['pre-test'], function (cb) {
  var mochaErr;

  gulp.src('test/**/*.js')
    .pipe(plumber())
    .pipe(babel())
    .pipe(mocha({reporter: 'spec', require: ['babel-core/register']}))
    .on('error', function (err) {
      console.log(err);
      mochaErr = err;
    })
    //.pipe(istanbul.writeReports())
    .on('end', function () {
      cb(mochaErr);
    });
});

gulp.task('coveralls', ['test'], function () {
  if (!process.env.CI) {
    return;
  }

  return gulp.src(path.join(__dirname, 'coverage/lcov.info'))
    .pipe(coveralls());
});

gulp.task('babel', function () {
  return gulp.src('lib/**/*.js')
    .pipe(babel())
    .pipe(gulp.dest('dist'));
});

//gulp.task('default', ['clone', 'lint', 'test', 'coveralls']);
gulp.task('default', ['clone', 'test', 'coveralls']);
