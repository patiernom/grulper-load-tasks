'use strict';

var chai = require('chai'),
    expect = chai.expect;

describe('Grulper Tasks Loader', function() {
    describe('node module function', function() {
        var testGrulperLoadTasks;

        beforeEach(function(done) {
            testGrulperLoadTasks = require('../index');
            done();
        });

        it('task module exists', function(done) {
            expect(testGrulperLoadTasks).to.exist;
            expect(typeof testGrulperLoadTasks).to.equal('function');
            done();
        });

        it('module load target tasks', function(done) {
            var gulp = require('gulp'),
                plugins = require('gulp-load-plugins')(),
                helpers = { },
                options = {
                    dirname: './tests/stubTasks',   // The directory that tasks are located in
                    pattern: '*.js',    // Pattern to use when looking for task files
                    cwd: process.cwd() // Current working directory configuration
                };

            gulp = testGrulperLoadTasks(gulp, options, plugins, helpers);
            done();
        });
    });
});