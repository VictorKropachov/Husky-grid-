var gulp     = require('gulp'),
    sass     = require('gulp-sass');

gulp.task('sass', function (){
  return gulp.src('sass/**/*.sass')
    .pipe(sass({outputStyle: 'expanded'}).on('error', sass.logError))
    .pipe(gulp.dest('css'))
});

/*??????????????????????????*/
gulp.task('watch', function() {
  gulp.watch('app/sass/**/*.sass').series();
});

/* Bower */
/* uglify JS*/
