# Gulper Load Tasks

A simple module for load your gulp tasks

## Installation

The easiest way is to keep `gulper-load-tasks` as a devDependency in your `package.json`.
```json
{
  "devDependencies": {
    "gulp": "^3.9.0",
    "gulper-load-tasks": "0.0.1"
  }
}
```

You can simple do it by:
```bash
npm install gulper-load-tasks  --save-dev
```


## Usage
You can use it into grunt task 
```js
var gulp     = require('gulp');
var tasks    = require('./gulp/loadTasks');

gulp = tasks(gulp, [plugins], [helpers], {
    dirname: '/tasks',   // The directory that tasks are located in
    pattern: '*.js',    // Pattern to use when looking for task files
    cwd: process.cwd() // Current working directory configuration
});
```


## Contributing

In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [gulp](http://gulpjs.com/).


## Release History

_(Nothing yet)_


## License

Licensed under the MIT license.
