var gulp = require('gulp');
var stylus = require('gulp-stylus');
var concat = require('gulp-concat');

gulp.task('default', function() {
	console.log("OOOOOh! Ahhhhhhh!");
});

gulp.task('styleMeMom',['default'], function() {
	return gulp.src('./Styles/style.styl')
		.pipe(stylus())
		.pipe(gulp.dest('./Styles'))
});

gulp.task('concatDatHoe', ['styleMeMom'], function() {
	return gulp.src(['app.js', 'Controllers/controllerOne.js', 'Controllers/controllerTwo.js', 'Controllers/controllerThree.js', 'Services/serviceOne.js', 'Services/serviceTwo.js'])
		.pipe(concat('concat.js'))
		.pipe(gulp.dest('Controllers'))
});
