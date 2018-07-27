var shell = require('shelljs');

function create() {
  
}

function update() {}

function run() {
  shell.exec('git status --porcelain | sed s/^...// | grep ^src/.*js$ | xargs node node_modules/eslint/bin/eslint.js');
}

module.exports = {
  create, update, run
};
