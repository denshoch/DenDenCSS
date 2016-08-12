var gulp = require('gulp');
var sass = require('gulp-sass');
var hologram = require('gulp-hologram');

// Sass
gulp.task('sass', function(){
  gulp.src('./src/scss/*.scss')
    .pipe(sass())
    .pipe(gulp.dest('./dist'));
});

// Hologram
gulp.task('hologram', ['sass'], function() {
  return gulp.src('./hologram_config.yml')
    .pipe(hologram());
});

gulp.task('default', ['sass']);