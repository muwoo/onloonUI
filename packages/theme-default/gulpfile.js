/**
 * @author monkeywang
 * Date: 17/5/18
 */
var gulp = require('gulp'), //本地安装gulp所用到的地方
  less = require('gulp-less');

//定义一个testLess任务（自定义任务名称）
gulp.task('gulpLess', function () {
  gulp.src('./src/**/*.less') //该任务针对的文件
    .pipe(less()) //该任务调用的模块
    .pipe(gulp.dest('./lib')); //将会在src/css下生成index.css
});

gulp.task('watch.css', function () {
  gulp.watch('./src/**/*.less', ['gulpLess']);
});

gulp.task('default',['gulpLess', 'watch.css']); //定义默认任务
