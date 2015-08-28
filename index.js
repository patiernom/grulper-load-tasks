"use strict";

var path     = require('path'),
    glob     = require('glob'),
    defaults = require('defaults');

function isString(str) {
    return typeof str === 'string' || str instanceof String;
}

function isFunction(func) {
    return typeof func === 'function';
}

function defaultFunction(func) {
    return isFunction(func) ? func : null;
}

module.exports = function(gulp, options, plugins, helpers){
    if (isString(options)) {
        options = { dirname: options };
    }

    options = defaults(options, {
        dirname: '/tasks',
        cwd: process.cwd(),
        pattern: '*.js'
    });

    var tasksPattern = path.join (
            options.dirname,
            options.pattern
        ),
        taskFiles    = glob.sync(tasksPattern, { cwd: options.cwd });

    taskFiles.map(function (taskFile) {
        var basename     = path.basename(taskFile, path.extname(taskFile)),
            task         = require(path.join(options.cwd, taskFile)),
            taskFunc     = defaultFunction(task(gulp, plugins, helpers));

        taskFunc = defaultFunction(taskFunc);

        if(task.dependecies){
            gulp.task(basename, task.dependecies, taskFunc);
        }else{
            gulp.task(basename, taskFunc);
        }
    });

    return gulp;
};
