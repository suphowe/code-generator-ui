# 使用说明

## 首页顶部图标

ico 图标转换 http://www.bitbug.net/

- 将ico图标放到static目录下

- 在 build/webpack.dev.conf.js 文件修改
```
    new HtmlWebpackPlugin({
      ...
      favicon: './static/favicon.ico'     //首页图标
    })
```

- index.html 文件添加
```
    <link rel="shortcut icon" href="static/favicon.ico" type="image/x-icon"/>
```

- 重启服务
```
npm run dev
```