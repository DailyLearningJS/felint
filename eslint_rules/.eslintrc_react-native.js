module.exports = {
  "plugins": [
    "react",
    "react-native"
  ],
  "parser": "babel-eslint",
  "extends": ["airbnb", "eslint-config-i-am-meticulous"],
  "env": {
    "react-native/react-native": true
  },
  "rules": {
    "strict": 0,
    // react-native 建议
    "react-native/no-unused-styles": 1,
    "react-native/split-platform-components": 1,
    "react-native/no-inline-styles": 1,
    "react-native/no-color-literals": 1,
    // 自定义
    "semi": [1, "always", {"omitLastInOneLineBlock": true}],
    "import/no-extraneous-dependencies": 0,
    "import/no-unresolved": 0,
    "import/order": 1,
    "import/namespace": 0,
    "import/no-namespace": 1,
    "import/default": 0,
    "import/no-named-as-default-member": 0,
    "import/no-deprecated": 0,
    "import/no-named-as-default": 0,
    "quotes": [1, "single", "avoid-escape"],
    "max-len": [1, 180, 4],
    "eqeqeq": 1,
    "space-before-function-paren": [1, {"anonymous": "never", "named": "never"}],
    "camelcase": 1,
    "prefer-const": 1,
    "indent": [1, 2], // 缩进风格
    "arrow-spacing": 1, // 箭头函数的空格
    "comma-spacing": 1, // 冒号前后的空格
    "key-spacing": [1, { "beforeColon": false, "afterColon": true }], // 对象字面量中冒号的前后空格
    "object-curly-spacing": [1, "always"], // 大括号内是否允许不必要的空格
    "no-spaced-func": 2,  // 函数调用时 函数名与()之间不能有空格
    "space-after-keywords": [0, "always"],  // 关键字后面是否要空一格
    "space-in-parens": [1, "never"],  // 小括号里面要不要有空格
    "spaced-comment": 1,  // 注释风格要不要有空格什么的
    "no-undef": 1,
    "react/jsx-first-prop-new-line": [0, "never"],  // 因为要利用一些属性，不强制要求首属性分行
    "react/prop-types": 0,
    "react/jsx-filename-extension": 0,
    "react/jsx-no-bind": 0,
    "react/jsx-indent": 1,
    "react/no-array-index-key": 1,
    "import/max-dependencies": 1,
    "react/jsx-closing-tag-location": 1
  }
}
