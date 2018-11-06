const gulp = require('gulp'),
		sass = require('gulp-sass'),
		minify = require('gulp-minify');


// ------------------------------------------------- configs
const paths = {
	sass: {
		src: './sass/**/*.scss',
		dest: 'dist/'
	},
	js: {
		src: ['./js/**/*.js', 'bootstrap/js/src/*.js'],
		dest: 'dist/'
	}
};

// ---------------------------------------------- Gulp Tasks
gulp.task('compress', function() {
	return gulp.src(paths.js.src)
		.pipe(minify())
		.pipe(gulp.dest(paths.js.dest))
});

gulp.task('sass', function () {
	return gulp.src(paths.sass.src)
		.pipe(sass().on('error', sass.logError))
		.pipe(gulp.dest(paths.sass.dest))
});

// ------------------------------------ Gulp Testing Message
gulp.task('message', function(){
	console.log('It works!!');
});

// ---------------------------------------------- Gulp Watch
gulp.task('watch:styles', function () {
	gulp.watch(paths.sass.src, gulp.series('sass'));
});

gulp.task('watch:js', function () {
	gulp.watch(paths.js.src, gulp.series('compress'));
});

gulp.task('watch', gulp.series(['sass','compress'],
	gulp.parallel(['watch:styles', 'watch:js'])
));

// -------------------------------------------- Default task
gulp.task('default', gulp.series(['sass','compress'],
	gulp.parallel('message', 'watch')
));