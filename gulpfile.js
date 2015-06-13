var gulp = require('gulp')
var uglify = require('gulp-uglify');
var minifyCss = require('gulp-minify-css');
var prettify = require('gulp-jsbeautifier');
var htmlmin = require('gulp-htmlmin');
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
//Compress HTML file 
gulp.task('minify-html', function() {
  return gulp.src('index.html')
    .pipe(htmlmin({collapseWhitespace: true}))
    .pipe(gulp.dest('dist'))
});
// Pass Image 
gulp.task('pass-minifys-image', function (){
  return gulp.src('images/**/*.png')
    .pipe(gulp.dest('dist/image'))
});
//HTML Indent Code 
gulp.task('prettify-html', function() {
  gulp.src('index.html')
    .pipe(prettify({indentSize: 2}))
    .pipe(gulp.dest('dist/html'))
});
//CSS Normal Code
gulp.task('prettify-css', function() {
  gulp.src('styles/*.css')
    .pipe(prettify({indentSize: 2}))
    .pipe(gulp.dest('dist/css'))
});


//Build production files, the default task

