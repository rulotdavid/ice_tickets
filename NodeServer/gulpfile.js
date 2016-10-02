const gulp = require('gulp');
const todo = require('gulp-todo');

gulp.task('todo', function() {
	
	gulp.src(['./index.js'])
		.pipe(todo())
		.pipe(gulp.dest('./'));
		
});

gulp.task('default', function() {
	
});