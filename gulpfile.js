var gulp = require('gulp')
var uglify = require('gulp-uglify');
var minifyCss = require('gulp-minify-css');
var prettify = require('gulp-jsbeautifier');
//Compress JavaScript File 
gulp.task('compress', function() {
  return gulp.src('js/appCognits.js')
    .pipe(uglify())
    .pipe(gulp.dest('dist/js'));
});
//Compress Css files
gulp.task('minify-css', function() {
  return gulp.src('styles/*.css')
    .pipe(minifyCss({compatibility: 'ie8'}))
    .pipe(gulp.dest('dist/css'));
}); 
gulp.task('prettify-html', function() {
  gulp.src('index.html')
    .pipe(prettify({indentSize: 2}))
    .pipe(gulp.dest('dist/html'))
});
gulp.task('prettify-css', function() {
  gulp.src('styles/*.css')
    .pipe(prettify({indentSize: 2}))
    .pipe(gulp.dest('dist/css'))
});
