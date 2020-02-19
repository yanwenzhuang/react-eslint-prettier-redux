1 start the project
yarn install
yarn start
access to the http://localhost:3000

2 do your pratice
create you test file in the "component" folder
import the files you created and use it in the "App.js"

3 format your code in VSCode
as this project import the eslint and prittier, you can format your code by
adding the configuration in VSCode

step1: edit the settings: file->preference->settings

```
"eslint.codeActionsOnSave": true,
"eslint.validate": [
  "vue",
  "html",
  "javascript",
  "typescript",
  "javascriptreact",
  "typescriptreact"
],
"eslint.migration.2_x": "off",
"editor.formatOnSave": true,
"files.associations": {
  "\*.js": "javascriptreact"
}
```

step2: install the Extendsions: ESLint, Prettier-Code formatter
