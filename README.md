Grunt是目前最流行的前端构建工具，对前端的效率帮助非常大，但Grunt并非完美无缺，json描述任务的方式，显得过于繁琐和不够简单，对于新手来说，有不少的学习成本。

今天明河介绍个比Grunt更易用的前端构建工具：**[Gulp.js][1]**，最近很火的开源项目，引起了很多前端同学的关注，大家都很好奇，Gulp.js拿什么跟Grunt掰手腕。

大多数前端处于观望状态，Gulp.js这杯可乐很诱人，但第三方插件太少（常用的任务插件都有），被Grunt甩了N条街，当然毕竟是新工具，情有可原，相信假以时日，Gulp.js会被更多前端同学认可，明河希望通过这篇文章，能够让大家看到Gulp.js的潜力。

## 安装Gulp.js

Gulp.js跟Grunt一样基于Node.js，使用npm安装即可：

    npm install -g gulp
    

想要使用Gulp.js构建您的工程，需要在工程目录中安装Gulp.js的依赖

    npm install --save-dev gulp gulp-util
    

--save-dev 命令配置，可以自动在工程目录的package.json文件内生成包依赖信息，比如：

    {
      "devDependencies": {
        "gulp-util": "~2.2.14",
        "gulp": "~3.5.2"
      }
    }

（如果项目工程中没有package.json，请运行npm init。）

在工程根目录下创建个**gulpfile.js**文件，内容如下：

    var gulp = require('gulp');
    var gutil = require('gulp-util');

    gulp.task('default', function(){
      // place code for your default task here
    });

使用**gulp**命令，运行Gulp.js构建程序：

   gulp





 [1]: http://gulpjs.com/