module.exports = {
    extends: 'airbnb',
    plugins: [
        'react', 'jsx-a11y', 'import',
    ],
    parser: 'babel-eslint',
    env: {
        node: true,
        browser: true,
        es6: true,
      },
    ecmaFeatures: {
        jsx: true,
        modules: true,
        decorators: true,
      },
    rules: {
        // Ignore Rules
        strict: 1,
        'no-underscore-dangle': 0,
        'no-mixed-requires': 0,
        'no-process-exit': 0,
        'no-warning-comments': 0,
        curly: 0,
        'no-multi-spaces': 0,
        'no-alert': 0,
        // Warnings
        'no-debugger': 1,
        'no-empty': 1,
        'no-invalid-regexp': 1,
        'no-unused-expressions': 1,
        'no-native-reassign': 1,
        'no-fallthrough': 1,
        'no-spaced-func': 0,
        'handle-callback-err': 1,
        camelcase: 1,
        'max-len': [
            2, 80,
        ],
        'newline-per-chained-call': [
            'error',
            //  { ignoreChainWithDepth: 2, },,,
        ],
        // Errors
        'no-undef': 2,
        'no-dupe-keys': 2,
        'no-empty-character-class': 2,
        'no-self-compare': 2,
        'valid-typeof': 2,
        'no-unused-vars': 2,
        //  "handle-callback-err": 2,
        'no-shadow-restricted-names': 2,
        'no-new-require': 2,
        'no-mixed-spaces-and-tabs': 2,
        // stylistic errors
        'new-cap': 2,
        'semi-spacing': 2,
        quotes: [
            2, 'single',
        ],
        'key-spacing': [
            2, {
                align: 'value',
              },
        ],
        'object-curly-spacing': [
            'error', 'never',
        ],
        'brace-style': [
            'error',
            '1tbs', {
                allowSingleLine: true,
              },
        ],
        //  Plugin rules
        'jsx-quotes': 1,
        'react/jsx-no-undef': 1,
        'react/jsx-uses-react': 1,
        'react/jsx-uses-vars': 1,
        'react/no-did-mount-set-state': 1,
        'react/no-did-update-set-state': 1,
        'react/no-multi-comp': 1,
        'react/prop-types': 1,
        'react/react-in-jsx-scope': 1,
        'react/self-closing-comp': 1,
        'react/jsx-wrap-multilines': 1,
      },
  };
