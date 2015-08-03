'use strict';

module.exports = function (gulp, plugins, helpers) {
    return function(){
        return gulp.src('./stubFiles/*.js')
            .pipe(plugins.jshint('.jshintrc'))
            .pipe(plugins.jscs())
            .pipe(plugins.jshint.reporter('jshint-stylish'));
    }
};
