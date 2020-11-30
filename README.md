### 一、说明

> - 登录成功后自动存储token到本地
> - 定制layui的table.js 在请求中设置headers添加Access-Token，结合后台jwt实现鉴权

### 二、layui操作本地存储说明

| 操作 |                             API                              | 描述                                                         |
| :--: | :----------------------------------------------------------: | :----------------------------------------------------------- |
|  增  | layui.data('test', {<br/>key: 'nickname'<br/>,value: '宁哥'<br/>}); | 向 表test 插入一个 nickname 字段，如果该表不存在，则自动建立 |
|  删  | layui.data('test', {<br/>key: 'nickname'<br/>,remove: true<br/>}); | 删除 test 表的 nickname 字段                                 |
|  改  |                             ...                              | 同【增】，会覆盖已经存储的数据                               |
|  查  | var localTest = layui.data('test');<br/>console.log(localTest.nickname); //获得“贤心” | 向表 test 读取全部的数据                                     |

### 三、目录结构说明
> |-- DISCUZ
>     |-- favicon.ico
>     |-- index.html    //入口
>     |-- LICENSE
>     |-- README.md
>     |-- css           //静态文件
>     |-- images        //静态文件
>     |-- js            //公共js
>     |-- layui         //layui组件
>     |   |-- font
>     |   |-- images
>     |   |   |-- face
>     |   |-- lay
>     |-- page          //业务html及对应的js
>         |-- doc
>         |-- img
>         |-- login
>         |-- news
>         |-- systemSetting
>         |-- user      //用户模块

### 四、table.js定制

> E:/layui/discuz/layui/lay/modules/table.js
>
> 204行处添加
>
>  headers: {"Access-Token": layui.data('userInfo').currentUserToken}

