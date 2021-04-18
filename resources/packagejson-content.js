module.exports = (name) => (
`{
  "name": "${name}",
  "version": "1.0.0",
  "description": "A new hyperbox application!",
  "main": "server.js",
  "scripts": {
    "test": "echo \\"Error: no test specified\\" && exit 1",
    "start": "npx webpack && node server.js"
  },
  "keywords": [
    "${name}",
    "hyperbox",
    "hyperbox-js",
    "JavaScript"
  ],
  "author": "",
  "license": "ISC",
  "devDependencies": {
    "express-favicon": "^2.0.1",
    "css-loader": "^5.2.0",
    "html-loader": "^2.1.2",
    "html-webpack-plugin": "^5.3.1",
    "script-loader": "^0.7.2",
    "less-loader": "^8.1.1",
    "ts-loader": "^8.1.0",
    "typescript": "^4.2.4",
    "webpack": "^5.30.0",
    "webpack-cli": "^4.6.0"
  }
}
`
);
