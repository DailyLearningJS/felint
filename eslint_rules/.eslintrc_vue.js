module.exports = {
  "extends": "vue",
  "env": {
    "browser": true,
    "node": true,
    "es6": true
  },
  "rules": {
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
    "comma-dangle": 1,
    "no-undef": 1
  }
}
