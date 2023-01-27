module.exports = {
    
    "env": {
        "node": true,
        "mocha": true,
        "es6": true
    },
    "parserOptions": {
        "ecmaVersion": 2021,
        "requireConfigFile": false
    },
    "plugins": [
        "indexof",
        "prettier"
    ],
    "parser": "@babel/eslint-parser",
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
    
        // prettier config goes here
        "prettier/prettier": [
            1,  //warn 
            { 
                "singleQuote": true, 
                "semi" : true, 
                "bracketSpacing": true, 
                "printWidth": 130, 
                "arrowParens": "avoid", 
                "trailingComma": "none"
            }
        ]
    }
};