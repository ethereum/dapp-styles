var gulp = require('gulp');
var less = require('gulp-less');
var replace = require('gulp-replace');
var path = require('path');

gulp.task('less', function () {
  return gulp.src('./dapp-styles.less')
    .pipe(less({
      paths: [ path.join(__dirname, 'less', 'includes') ]
    }))
    .pipe(gulp.dest('./dist'));
});

 
gulp.task('replaceUrl', ['less'],function(){
  gulp.src(['./dist/dapp-styles.css'])
    .pipe(replace(/packages\/ethereum_dapp-styles\//g, ''))
    .pipe(gulp.dest('./dist'));
});

gulp.task('copy-files', ['replaceUrl'], function() {
    return gulp.src([
        './fonts/*.otf',
        './icons/Simple-Line-Icons.*',
        ], { base: './' })
        .pipe(gulp.dest('./dist'));
});

gulp.task('default', ['copy-files']);