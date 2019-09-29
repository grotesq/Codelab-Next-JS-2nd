참조 : https://github.com/zeit/next.js/tree/canary/examples/with-dotenv 

## 설치

```bash
yarn add dotenv dotenv-webpack
```

## next.config.js

```js
require('dotenv').config();

const path = require('path');
const Dotenv = require('dotenv-webpack');

let modules = {
  webpack: config => {
    config.plugins = config.plugins || [];

    config.plugins = [
      ...config.plugins,

      // Read the .env file
      new Dotenv({
        path: path.join(__dirname, '.env'),
        systemvars: true
      })
    ];

    return config;
  }
};

module.exports = modules;
```
