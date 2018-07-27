var shell = require('shelljs');

function create() {}

function update() {}

function run() {
  if (shell.exec('git status --porcelain | sed s/^...// | grep ^src/.*js$ | xargs node node_modules/eslint/bin/eslint -c mcconf/.eslintrc --color always').code !== 0) {
    shell.exit(1);
  }
}

module.exports = {
  create, update, run
};
