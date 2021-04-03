module.exports = (name) => (
`{
  "name": "${name}",
  "version": "1.0.0",
  "description": "A new hyperbox application!",
  "main": "server.js",
  "scripts": {
    "test": "echo \\"Error: no test specified\\" && exit 1",
    "dev": "./node_modules/webpack-dev-server/bin/webpack-dev-server.js --mode development --open",
    "start": "./node_modules/webpack/bin/webpack.js && node server.js"
  },
  "keywords": ["${name}", "hyperbox", "hyperbox-js", "JavaScript"],
  "author": "",
  "license": "ISC",
  "dependencies": {
    "css-loader": "^5.2.0",
    "express-favicon": "^2.0.1",
    "hyperbox-js": "^1.0.2",
    "script-loader": "^0.7.2",
    "style-loader": "^2.0.0",
    "webpack-dev-server": "^3.11.2"
  },
  "devDependencies": {
    "webpack": "^5.30.0",
    "webpack-cli": "^4.6.0"
  }
}
`
);
