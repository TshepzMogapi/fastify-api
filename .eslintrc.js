module.exports = {
  'extends': 'google',
  'parserOptions': {
    ecmaVersion: 2017,
  },
  'rules': {
    'comma-dangle': [2, 'only-multiline'],
    'no-console': 'off',
  },
  'require': {
    'FunctionDeclaration': false,
    'MethodDefinition': false,
    'ClassDeclaration': true,
    'ArrowFunctionExpression': true,
    'FunctionExpression': true
  }
};
