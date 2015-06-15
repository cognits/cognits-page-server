var gulp = require('gulp')
var uglify = require('gulp-uglify');
var minifyCss = require('gulp-minify-css');
var prettify = require('gulp-jsbeautifier');
var htmlmin = require('gulp-htmlmin');
var clean = require('gulp-clean');
 //Clean Directory
gulp.task('clean', function () {
    return gulp.src('../dist', {read: false})
        .pipe(clean());
});
//Compress JavaScript File 
gulp.task('compress', function() {
  return gulp.src('js/appCognits.js')
    .pipe(uglify())
    .pipe(gulp.dest('dist/js'));
});
//Pass JSON
gulp.task('pass-json', function (){
  return gulp.src('js/**/*.json')
    .pipe(gulp.dest('dist/js'))
});
//Compress Css files
gulp.task('minify-css', function() {
  return gulp.src('styles/*.css')
    .pipe(minifyCss({compatibility: 'ie8'}))
    .pipe(gulp.dest('dist/styles'));
});
//Compress HTML file 
gulp.task('minify-html', function() {
  return gulp.src('index.html')
    .pipe(htmlmin({collapseWhitespace: true}) , ({quotes: true}) , ({empty: true}))
    .pipe(gulp.dest('dist'))
});
// Pass Image 
gulp.task('pass-minifys-image', function (){
  return gulp.src('images/**/*.png')
    .pipe(gulp.dest('dist/images'))
});
gulp.task('pass-minifys-image-styles', function (){
  return gulp.src('styles/**/*.png')
    .pipe(gulp.dest('dist/styles'))
});
// Pass tipographics 
gulp.task('pass-tipographics', function (){
  return gulp.src('images/**/*.ttf')
    .pipe(gulp.dest('dist/images/'))
});
//CSS Normal Code
gulp.task('prettify-css', function() {
  gulp.src('styles/*.css')
    .pipe(prettify({indentSize: 2}))
    .pipe(gulp.dest('dist/css'))
});

//Build production files, the default task
gulp.task('default' , ['clean','minify-css','compress','pass-minifys-image','minify-html','pass-tipographics','pass-minifys-image-styles','pass-json'])
