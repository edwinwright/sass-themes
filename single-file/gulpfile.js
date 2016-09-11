const gulp = require('gulp');
const sass = require('gulp-sass');
const sassdoc = require('sassdoc');
const sourcemaps = require('gulp-sourcemaps');


// Log stats
require('gulp-stats')(gulp);


gulp.task('default', ['styles']);

gulp.task('styles', () => {
	return gulp.src('./src/**/*.scss')
		.pipe(sourcemaps.init())

		// TODO: Check compressed option. It changes the line numbers, but they
		// still come out wrong.
    .pipe(sass({ outputStyle: 'nested'}).on('error', sass.logError)) // nested, expanded, compact, compressed

		// Magic to fix autoprefixer issue reading in sourcemaps
    // .pipe(sourcemaps.write({includeContent: false}))
    // .pipe(sourcemaps.init({loadMaps: true}))
		// End magic

		.pipe(sourcemaps.write('.'))
		.pipe(gulp.dest('./dist'));
});


gulp.task('sassdoc', () => {
  const options = {
    dest: 'docs/sass',
    verbose: true,
    display: {
      access: ['public', 'private'],
      alias: true,
      watermark: true,
    },
    groups: {
      'undefined': 'Ungrouped',
      foo: 'Foo group',
      bar: 'Bar group',
    }
  };

  return gulp.src('./src/**/*.scss')
    .pipe(sassdoc(options));
});
