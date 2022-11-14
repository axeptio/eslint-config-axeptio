module.exports = {

    globals: {
        MyGlobal: true
    },
    "env": {
        "node": true,
        "mocha": true,
        "es6": true
    },
    "parserOptions": {
        "ecmaVersion": 2021
    },
    "plugins": [
        "indexof",
        "prettier"
    ],
    "extends": [
        "eslint:recommended",
        "standard",
        "plugin:import/recommended",
        "plugin:node/recommended"
    ],
    "rules": {
        // Exception
        "semi": ["warn", "always"],
    
        // Format xtras
        "max-len": ["warn", 130],
        "linebreak-style": ["error", "unix"],
        "space-before-function-paren": ["off"],
    
        // Other xtras
        "strict": ["warn", "never"],
        "indexof/no-indexof": ["warn"],
    
        "prettier/prettier": 1 // Means Warn
    }
};