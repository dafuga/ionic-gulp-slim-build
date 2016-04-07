var gulp = require('gulp'),
    slim = require('gulp-slim'),
    assign = require('lodash.assign');

var defaultOptions = {
  src: 'app/**/*.slim',
  dest: 'www/build',
  onError: function(err) {
    console.error(err.message);
    this.emit('end'); // Don't kill watch tasks - https://github.com/gulpjs/gulp/issues/259
  }
}

module.exports = function(options) {
  options = assign(defaultOptions, options);

  return gulp.src(options.src)
    .pipe(slim({ options: ['disable_escape=true', 'logic_less=true'] }))
    .on('error', options.onError)
    .pipe(gulp.dest(options.dest));
}
