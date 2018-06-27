## react-router
```text
一个react-router的简单举例
```

## redux-Saga
```text
redux-Saga的举栗说明🍭
```

## react_crud  
```text
一个游戏列表的 增删改查.
backend 为node写的一个server服务

```
## redux-login
```js
//一个前后端的 登陆检验 demo. 前端react, 后端node , 数据库 postgreSQL

1. Client:   
rely on:
redux react-redux                    //react专用redux
redux-logger                         //调试输出用的
redux-devtools-extension             //浏览器调试工具, 得配合谷歌插件
redux-thunk                          //用于在action中处理异步试讲 
react-router-dom                     //react路由
classnames                           //用于处理classname,比如用三目运算符来判断返回某个类名
shortid                              //生成随机Id
lodash                               //常用内裤🤣
axios                                //请求
jwt-decode                           //对JWT进行解码

2. Server:
rely on:
express                               //对http模块的封装和加强
babel-cli babel-preset-env            //在Node下使用es新增的语法
nodemon                               //避免老是自己去重启server
body-parser                           //解析request的参数
lodash                                //常用内裤🤣
validator                             //校验一些东西,如email,空对象等乱七八糟的
jsonwebtoken                          //jwt, 区别于传统的session和token的登录验证

3. DataBase:
knex                                  //迁移数据库用的, 也可以用脚本来建表等 
pg                                    //安装POSTGRESQL这个库
bookshelf                             //方便js来控制数据库
bcrypt                                //密码加密
```

