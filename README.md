# mc-lint

美菜代码质量自动化检测、监察工具

![meicai logo](http://www.meicai.cn/assets/images/new-img/logo.png)

### 说明
原则：不同项目共享mcconf/.eslintrc.js，单独维护根目录下.eslintrc.js。同组不同项目之间需要遵循同一套 eslint 监察机制，同时并入提交监察体系，以提升开发质量

### 使用规则

```
mnpm install -g @mc/felint

mc-lint init -p react   // 可以选择平台，目前支持react、react-native、node、vue，欢迎共同维护标准

// 默认将会生成两个文件
// 在mcconf文件夹下建立.eslintrc配置文件，此配置文件各项目应该共享，不建议自行修改
mcconf/.eslintrc.js
// 外部文件将会引用上面的默认文件，用户可以自行定义覆盖默认规则
.eslintrc.js

// 自主添加钩子
package.json
...
  "scripts": {
    ...
    "lint": "mc-lint run"
    ...
  }
...
  
```

### 额外功能

```
mc-lint help-self
// 自助功能，用户可以自行运行相关指令来对项目当中的文件进行优化，建议使用之前先add .
```
