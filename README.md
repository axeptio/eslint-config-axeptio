# ESLint and Prettier config for Back projects

## Installing

1. In your project folder, run:

```sh
npm i -D @axeptio/eslint-config-axeptio eslint prettier eslint-config-prettier eslint-config-standard eslint-plugin-import eslint-plugin-indexof eslint-plugin-promise eslint-plugin-prettier
```

2. Now, create (or update) a `.eslintrc` file with the following content:

```json
{
 "extends": "eslint-config-axeptio"
}
```

3. Add prettier `.prettierrc` in your repo 

```sh
{
  "semi": true,
  "tabWidth": 2,
  "singleQuote": true,
  "bracketSpacing": true,
  "printWidth": 130,
  "arrowParens": "avoid",
  "trailingComma": "none",
  "endOfLine": "auto"
}
```

