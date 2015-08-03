/**
 * Created by marcopatierno on 27/07/15.
 */
'use strict';

var chai = require('chai'),
    expect = chai.expect;

describe('Gulper Tasks Loader', function() {
    describe('node module object', function() {
        var gulp, tasks;

        beforeEach(function(done) {
            gulp = require('gulp');
            tasks = require('../index');
            done();
        });

        it('task module exists', function(done) {
            expect(tasks).to.exist;
            expect(typeof tasks).to.equal('function');
            done();
        });

        it('module load target tasks', function(done) {
            var plugins = require('gulp-load-plugins')(),
                helpers = {
                    projectSetting: {
                        projectTasks:'./tests',
                        projectDirectory:'/stubTasks'
                    }
                };

            gulp = tasks(gulp, plugins, helpers, {
                dirname: '/stubTasks',   // The directory that tasks are located in
                pattern: '*.js',    // Pattern to use when looking for task files
                cwd: './tasks' // Current working directory configuration
            });

            done();
        });
    });
});