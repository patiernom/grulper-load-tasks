/**
 * Created by marcopatierno on 27/07/15.
 */
'use strict';

var gulp   = require('gulp'),
    plugins = require('gulp-load-plugins')(),
    paths = {
        lint: ['./gulpfile.js', './index.js'],
        tests: ['./tests/*.js', '!./tests/{temp,temp/**}']
    };

gulp.task('lint', function () {
    return gulp.src(paths.lint)
        .pipe(plugins.jshint('.jshintrc'))
        .pipe(plugins.jscs())
        .pipe(plugins.jshint.reporter('jshint-stylish'));
});

gulp.task('mocha', function (cb) {
    gulp.src(paths.tests, {cwd: __dirname})
        .pipe(plugins.mocha())
        .on('end', cb);
});

gulp.task('test', ['lint', 'mocha']);


gulp.task('default',['test']);
