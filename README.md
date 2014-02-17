Grunt是目前最流行的前端构建工具，对前端的效率帮助非常大，但Grunt并非完美无缺，json描述任务的方式，显得过于繁琐和不够简单，对于新手来说，有不少的学习成本。

今天明河介绍个比Grunt更易用的前端构建工具：**[Gulp.js][1]**，最近很火的开源项目，引起了很多前端同学的关注，大家都很好奇，Gulp.js拿什么跟Grunt掰手腕。

大多数前端处于观望状态，Gulp.js这杯可乐很诱人，但第三方插件太少（常用的任务插件都有），被Grunt甩了N条街，当然毕竟是新工具，情有可原，相信假以时日，Gulp.js会被更多前端同学认可，明河希望通过这篇文章，能够让大家看到Gulp.js的潜力。

<a href="http://www.36ria.com/6373/gulp-2" rel="attachment wp-att-6378"><img src="http://www.36ria.com/wp-content/uploads/2014/02/gulp-2.png" alt="gulp-2" width="354" height="407" class="alignnone size-full wp-image-6378" /></a>

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

![enter image description here][2]

表示运行**default**（默认任务）成功。

接下来看个具体的demo。

## 简单使用说明

假设[demo工程][3]目录结构如下：

![enter image description here][4]

我们构建的目标是压缩src目录下的a.js和b.js，合并生成all.min.js放在build目录下。

### 安装插件

    npm install --save-dev gulp-uglify gulp-concat
    

gulp-uglify：用于压缩js gulp-concat：用于合并文件

Gulp.js目前提供了[300多个插件][5]，基本可以满足主流前端构建需求。

### 编写Gulpfile.js构建脚本

完整代码：

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
    

运行**gulp**命令后：

![enter image description here][6]

生成了**[all.min.js][7]**。

接下来来看下上述代码的含义。

首先require需要的插件：

    var uglify  = require('gulp-uglify');
    var concat  = require('gulp-concat');
    

使用**gulp.task()**定义一个任务目标：

    gulp.task('concat', function () {
          //...
    });
    

第一个参数为任务名。

gulp.task()返回值为一个stream，stream的使用是Gulp.js的核心，也是Gulp.js与Grunt的最重要区别，Gulp.js充分利用了Node.js的[Streams API][8]，关于流的概念下一篇进阶篇会讲解到。

当第二个参数为数组时，表明此任务存在依赖任务，会运行完依赖任务后，才执行该任务，比如：

    gulp.task('mytask', ['array', 'of', 'task', 'names'], function() {
        // Do stuff
    });
    

**gulp.src()**任务处理的目标文件，返回的是stream，请把gulp看成矿泉水厂（想起了恒大冰泉-_-!），文件数据理解为水流，这里相当于阀门打开，水开始顺着管道（每个任务可以理解为一段管道）流去，然后经过各个插件的加工过滤，最后罐装到水瓶里面。

**.pipe()** 是stream的核心方法，不是gulp的方法哦，第一个参数为插件方法，插件会接收从上游流下的文件，进行处理加工后，再往下流。

    .pipe(uglify())
    

压缩文件

     .pipe(concat('all.min.js'))
    

将压缩后的文件合并成all.min.js，这里留意，不需要目录路径，stream流过来的就是文件数据，只要提供文件名即可。

      .pipe(gulp.dest('./build'))
    

**gulp.dest()**：用于指定文件输出位置，第一个参数为目录路径。

最后运行任务：

    gulp.task('default', ['concat']);
    

gulp命令默认执行default任务，等于**gulp default**。

## 总结

gulp的简单使用先介绍这里，下一篇明河将深入讲解gulp的细节，同时指明Gulp.js为什么比Grunt来得优秀。

 [1]: http://gulpjs.com/
 [2]: http://s0.36ria.com/201402/4922/43292_o.png
 [3]: https://github.com/minghe/Gulp.js-demo
 [4]: http://s3.36ria.com/201402/4922/43293_o.png
 [5]: http://gratimax.github.io/search-gulp-plugins/
 [6]: http://s3.36ria.com/201402/4922/43294_o.png
 [7]: https://github.com/minghe/Gulp.js-demo/blob/master/build/all.min.js
 [8]: http://nodejs.org/api/stream.html