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
                helpers = {
                    projectSetting: {
                        projectTasks:'./tests',
                        projectDirectory:'/stubTasks'
                    }
                },
                options = {
                    dirname: '/stubTasks',   // The directory that tasks are located in
                    pattern: '*.js',    // Pattern to use when looking for task files
                    cwd: './tasks' // Current working directory configuration
                },
                defaultDir = helpers.projectSetting.projectDirectory,
                defaultRoot = helpers.projectSetting.projectTasks;

            gulp = testGrulperLoadTasks(gulp,defaultDir, defaultRoot, options, plugins, helpers);
            done();
        });
    });
});