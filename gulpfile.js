    var gulp    = require('gulp');
    var gutil    = require('gulp-util');
    var uglify  = require('gulp-uglify');
    var concat  = require('gulp-concat');

    gulp.task('concat', function () {
        gulp.src('./src/*.js')
            .pipe(uglify())
            .pipe(concat('all.min.js'))
            .pipe(gulp.dest('./build'));
    });

    gulp.task('default', ['concat']);