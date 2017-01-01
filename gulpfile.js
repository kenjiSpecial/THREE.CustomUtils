var gulp = require('gulp');
var babel = require('gulp-babel');
var bump = require('gulp-bump');

gulp.task('compile', function() {
    return gulp.src('index.js')
        .pipe(babel({ presets: ['es2015'] }))
        .pipe(gulp.dest('build'));
});