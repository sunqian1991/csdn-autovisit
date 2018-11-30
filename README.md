# CSDN刷访问量工具
## 介绍
CSDN博客的访问量挺有意思的，同一个IP多次访问并不会被过滤，仍然计入访问量中，但是短时间内多次访问时也并不会全都计算在内，貌似只会在一个时间段内取一次，那么这个工具做的就是定时向博客地址发出HTTP请求，经测试，设置为每分钟请求一次时，基本都会计入访问量中。

## 使用
- 工具是基于nodejs做的，所以需要有一个[node](https://nodejs.org/en/download/current/)环境

- git clone项目
```shell
git clone https://github.com/sunqian1991/autovisit.git
```

- 安装依赖
```shell
npm install
```

- 修改配置文件

博客的地址以及必要的访问信息都定义在一个json文件中，路径是`src/config/config.json`

#### 配置文件 
工程自带的配置文件中配置的是测试的数据，使用时需要自行修改，下面说明配置文件的数据结构

##### Referer
`Referer`字段可以在开发者工具中的请求中找到，请求会加到header里面，现在CSDN还没有对这个字段作校验，加上去也是以防万一

![1]

##### cron
`cron`指的是请求的时间间隔设置，工程默认的是每分钟请求一次，这个可以自行设置，可以参考[cron表达式](http://cron.qqe2.com/)

##### urls
`urls`定义的是所有需要请求的博客的地址，这个直接按照配置文件的结构来添加或修改

- 执行脚本
```shell
npm run start
```

- 这里执行的是开发代码，也可以使用build以后的生产代码
```shell
npm run build        // 这里是热编译的

node ./build/app.js
```

## 其它
上面只是介绍了简单的使用方法，事实上也可以画一个界面并使用`electron`等框架或工具来将脚本打包成一个具有图形界面的软件。

这个工具只是刷博客的访问量，实际上博客的访问量并没有什么卵用，可能也只是装逼吧~~~

**非常期待您能点个赞**

## 开发计划
- [x] 脚本开发
- [ ] 添加图形化界面并打包成可执行文件



[1]:https://github.com/sunqian1991/autovisit/raw/master/src/config/referer.png
