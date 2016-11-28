var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync').create();
var env = require('dotenv').config();
var url = process.env.DB_URL || process.env.DB_LOCAL


gulp.task('hello', function() {
  console.log('Hello Vegas Guru World');
});

gulp.task('sass', function() {
  return gulp.src('./scss/**/*.scss') // Gets all files ending with .scss in app/scss
    .pipe(sass())
    .pipe(gulp.dest('./css'))
    .pipe(browserSync.reload({
      stream: true
    }))
});

gulp.task('browserSync', function() {
browserSync.init({
    server: {
        baseDir: "./",
        // The key is the url to match
        // The value is which folder to serve (relative to your current working directory)
        routes: {
            "/bower_components": "bower_components",
            "/node_modules": "node_modules"
        }
    }
});
});

gulp.task('kickit', ['browserSync', 'sass'], function (){
  gulp.watch('./scss/*.scss', ['sass']);
  // Other watchers
});
