## 电脑网页转换手机查看模板

电脑效果图

![电脑效果图](./other/README/render.png)

手机效果图

<img src="./other/README/render-phone.png" alt="手机效果图" style="zoom: 50%;" />

说明：这个模板可以把所有dist目录在电脑访问中转换成一个带有手机显示器的模板服务器
在手机端访问不进行处理但是会继续渲染的服务器

app.html和phone.png会自动生成

#### 使用方法：
##### 安装
```bash
npm i -g
```
##### 运行
将dist放入主目录 执行

```bash
peServe [dist的上层目录]
```

例子

peServe . 会将该目录下的dist文件夹作为服务器的根文件夹

#### 配置端口方法：

进入 config/index.js

更改port即可