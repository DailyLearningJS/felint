# mc-lint

美菜代码质量自动化检测、监察工具

![meicai logo](http://www.meicai.cn/assets/images/new-img/logo.png)

### 说明

同组不同项目之间需要遵循同一套 eslint 监察机制，同时并入提交监察体系，以提升开发质量

### 使用规则

```
mnpm install -g @mc/felint

mc-lint init -p react   // 可以选择平台
// 默认将会在mcconf文件夹下建立.eslintrc配置文件，此配置文件各项目应该共享，不建议自行修改

mc-lint update -p react
// 团队集体更新 eslint 规则的时候使用，一般不需要更新@mc/felint

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
