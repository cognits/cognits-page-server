var gulp = require('gulp')
var uglify = require('gulp-uglify');
var minifyCss = require('gulp-minify-css');
var Imagemin = require('gulp-imagemin');
var imageminOptipng = require('imagemin-optipng');
var imageminJpegtran = require('imagemin-jpegtran');
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
//Compres Image
gulp.task('minify-image-png', function () {
    return gulp.src('images/**/*.png') 
    .pipe(imageminOptipng({optimizationLevel: 2})())
    .pipe(gulp.dest('dist/images/png'));

});
gulp.task('minify-image-jpg', function () {
    return gulp.src('images/**/*.jpg')
        .pipe(imageminJpegtran({progressive: true})())
        .pipe(gulp.dest('dist/images/jpg'));
});