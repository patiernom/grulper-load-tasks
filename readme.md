[![GitHub version][grulper-fury-image]][grulper-fury-url]
[![Dependency Status][grulper-dependencies-image]][grulper-dependencies-url]
[![devDependency Status][grulper-devdependencies-image]][grulper-devdependencies-url]
[![Build Status][grulper-travis-image]][grulper-travis-url]


# Grulper Load Tasks

A simple plugin for [Grulper](https://github.com/patiernom/Grulper). This module load your gulp tasks from a specify directory.

## Installation

The easiest way is to keep `grulper-load-tasks` as a devDependency in your `package.json`.
```json
{
  "devDependencies": {
    "gulp": "^3.9.0",
    "grulper-load-tasks": "0.0.1"
  }
}
```

You can simple do it by:
```bash
npm install grulper-load-tasks  --save-dev
```


## Usage
You can use it into grunt task 
```js
var gulp     = require('gulp');
var tasks    = require('grulper-load-tasks');
var defaultDir = 'sampleTaskDir';
var defaultRoot = 'sampleRootDir';

gulp = tasks(gulp, defaultDir, defaultRoot, [options], [plugins], [helpers]);
```

Or you can specify options
```js
var gulp     = require('gulp');
var tasks    = require('grulper-load-tasks');
var defaultDir = 'sampleTaskDir';
var defaultRoot = 'sampleRootDir';

gulp = tasks(gulp, defaultDir, defaultRoot, {
  dirname: '/tasks',   // The directory that tasks are located in
  pattern: '*.js',    // Pattern to use when looking for task files
  cwd: process.cwd() // Current working directory configuration
});
```

You can also pass a plugins param if you use gulp-load-plugins npm module, and you want use those within your tasks.
```js
var plugins = require('gulp-load-plugins')();

gulp = tasks(gulp, defaultDir, defaultRoot, options, plugins);
```

The helpers param, is an object that allow you to have utility functions within your tasks. 
```js
var helpers = {
    somevar: '',
    somefunc: function(val){...}
}

gulp = tasks(gulp, defaultDir, defaultRoot, options, plugins, helpers);
```


## Contributing

In line of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [gulp](http://gulpjs.com/).


## Release History

_(Nothing yet)_


## License

Licensed under the MIT license.


[grulper-fury-image]: https://badge.fury.io/gh/patiernom%2Fgrulper-load-tasks.svg
[grulper-fury-url]: http://badge.fury.io/gh/patiernom%2Fgrulper-load-tasks
[grulper-dependencies-image]: https://david-dm.org/patiernom/grulper-load-tasks.svg
[grulper-dependencies-url]: https://david-dm.org/patiernom/grulper-load-tasks
[grulper-devdependencies-image]: https://david-dm.org/patiernom/grulper-load-tasks.svg
[grulper-devdependencies-url]: https://david-dm.org/patiernom/grulper-load-tasks#info=devDependencies
[grulper-travis-image]: https://travis-ci.org/patiernom/grulper-load-tasks.svg?branch=master
[grulper-travis-url]: https://travis-ci.org/patiernom/grulper-load-tasks
[grulper-coverage-image]: https://coveralls.io/repos/patiernom/grulper-load-tasks/badge.svg?branch=master&service=github
[grulper-coverage-url]: https://coveralls.io/github/patiernom/grulper-load-tasks?branch=master
