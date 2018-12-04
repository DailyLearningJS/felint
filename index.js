#!/usr/bin/env node
var program = require('commander');
var colors = require('colors');

var package = require('./package.json');
var rule = require('./bin/rule.js');

program
  .version(package.version)
  .description('本工具用于产生、维护美菜 eslint 统一规范');

program
  .command('init')
  .description('生成初始化文件')
  .option('-p, --platform [value]', '选择平台 react or vue')
  .action((options) => {
    if (options.platform) {
      if (options.platform !== 'react' && options.platform !== 'vue' && options.platform !== 'node') {
        console.log('\n----------> 参数只接受 react or vue or node\n'.red);
      } else {
        rule.create(options.platform);
      }
    } else {
      console.log('\n---------->-p, --platform [value] 选择平台 react or vue\n'.yellow);
    }
  });

// 暂时一样逻辑
program
  .command('update')
  .description('更新配置文件')
  .option('-p, --platform [value]', '选择平台 react or vue')
  .action((options) => {
    if (options.platform) {
      if (options.platform !== 'react' && options.platform !== 'vue' && options.platform !== 'node') {
        console.log('\n----------> 参数只接受 react or vue or node\n'.red);
      } else {
        rule.update(options.platform);
      }
    } else {
      console.log('\n---------->-p, --platform [value] 选择平台 react or vue\n'.yellow);
    }
  });

program
  .command('run')
  .description('执行指令')
  .action(() => {
    rule.run();
  });

program
  .command('help-self')
  .description('自主执行指令')
  .action(() => {
    console.log('\n 可自主执行\n'.green);
    console.log('\n自助删除所有尾部空白'.yellow);
    console.log('find . -path "./node_modules" -prune -o -name "*.js" -print | xargs sed -i "" "s/[ ]*$//g"'.green);

    console.log('\n自助删除所有 index.js'.yellow);
    console.log('find . -path "./node_modules" -prune -o -name "*.js" -print | xargs sed -i "" "s/\/index.js//g"'.green);
  });

program
  .parse(process.argv);
