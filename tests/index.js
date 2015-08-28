'use strict';

var chai = require('chai'),
    expect = chai.expect;

describe('Grulper Tasks Loader', function() {
    var testGrulperLoadTasks;

    beforeEach(function(done) {
        testGrulperLoadTasks = require('../index');
        done();
    });

    describe('node module export', function() {
        it('module exists', function(done) {
            expect(testGrulperLoadTasks).to.exist;
            done();
        });

        it('module is a function', function(done) {
            expect(typeof testGrulperLoadTasks).to.equal('function');
            done();
        });
    });

    describe('grulper plugin', function() {
        var gulp = require('gulp'),
            plugins = require('gulp-load-plugins')(),
            helpers = { },
            options = {
                dirname: './tests/stubTasks',   // The directory that tasks are located in
                pattern: '*.js',    // Pattern to use when looking for task files
                cwd: process.cwd() // Current working directory configuration
            };

        beforeEach(function(done) {
            gulp = testGrulperLoadTasks(gulp, options, plugins, helpers);
            done();
        });

        it('gulp tasks property is not empty', function(done) {
            expect(gulp.tasks).not.to.be.empty;

            done();
        });

        it('gulp tasks property is an Object', function(done) {
            expect(typeof gulp.tasks).to.equal('object');

            done();
        });

        describe('gulp tasks property contain target tasks', function() {
            it('tasks exists', function(done) {
                expect(gulp.tasks).to.contain.all.keys('myStubTask','myStubTaskWithDependencies');

                done();
            });

            describe('target tasks', function() {
                it('myStubTask is a function', function(done) {
                    expect(typeof gulp.tasks.myStubTask).to.equal('object');

                    done();
                });

                it('myStubTaskWithDependencies is a function', function(done) {
                    expect(typeof gulp.tasks.myStubTaskWithDependencies).to.equal('object');

                    done();
                });
            });
        });
    });
});