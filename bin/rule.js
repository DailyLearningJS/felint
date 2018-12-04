var shell = require('shelljs');
var colors = require('colors');

function create(plat) {
  shell.mkdir('-p', 'mcconf');
  shell.cp(__dirname + '/../eslint_rules/.eslintrc_' + plat + '.js', 'mcconf/.eslintrc.js');
  console.log('\n----------> mc-lint 初始化成功\n'.green);
}

function update(plat) {
  if (shell.exec('git clone -b master https://github.com/meicai-fe/felint.git mcconf/.felint && cp mcconf/.felint/eslint_rules/.eslintrc_' + plat + '.js mcconf/.eslintrc.js && rm -rf mcconf/.felint', { silent: true }).code === 0) {
    console.log('\n----------> mc-lint 配置更新成功\n'.green);
  }
}

function run() {
  if (shell.exec('git status --porcelain | sed s/^...// | grep ^.*js$ | xargs node node_modules/eslint/bin/eslint -c mcconf/.eslintrc.js --color always').code !== 0) {
    shell.exit(1);
  }
}

module.exports = {
  create, run, update
};
