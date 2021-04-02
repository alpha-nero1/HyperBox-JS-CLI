const { exec } = require('child_process');
const fs = require('fs');
const webpackContent = require('./resources/webpack.content');
const htmlContent = require('./resources/indexhtml.content');
const readmeContent = require('./resources/readme.content');
const serverContent = require('./resources/serverjs.content');
const packageContent = require('./resources/packagejson-content');
const mainContent = require('./resources/mainbox-content');
const { logGreen, logYellow } = require('./resources/utils');

module.exports = (args) => {
  const nameArg = args[0];
  const path = process.env.PWD
  // Make new app folder with name.
  const newAppPath = `${path}/${nameArg}`;
  fs.mkdir(newAppPath, () => {
    exec(`cd ${newAppPath}; npm init --yes; git init`, (err, stdout, stderr) => {
      logGreen('HyperBox: initialised npm ✅');
      logGreen('HyperBox: initialised git ✅');
      fs.writeFile(`${newAppPath}/package.json`, packageContent(nameArg), () => {})
      logYellow('HyperBox: installing hyperbox-js...')
      exec(`cd ${newAppPath}; npm install --save hyperbox-js`, () => {
        logGreen('HyperBox: hyperbox installed. ✅');
        // Make readme.
        const readmePath = `${newAppPath}/README.md`;
        fs.writeFile(readmePath, readmeContent(nameArg), () => {
          const gitIgnorePath = `${newAppPath}/.gitignore`;
          // Make gitignore.
          fs.writeFile(
            gitIgnorePath, 
            `
      #.gitignore
      node_modules
      npm-debug.log
            `,
          () => { })
          fs.mkdir(`${newAppPath}/public`, () => logGreen('HyperBox: Added /public ✅'));
          fs.mkdir(`${newAppPath}/src`, () => {
            logGreen('HyperBox: Added /src ✅')
            fs.writeFile(`${newAppPath}/src/index.html`, htmlContent(nameArg), () => {})
            fs.writeFile(`${newAppPath}/src/index.css`, '', () => {})
            fs.mkdir(`${newAppPath}/src/main`, () => {
              // Add the main box.
              fs.writeFile(`${newAppPath}/src/main/main.box.js`, mainContent(), () => {
                logGreen('HyperBox: Added your first box 📦')
              })
            })
          })
          fs.writeFile(`${newAppPath}/server.js`, serverContent(), () => logGreen('Added server.js ✅'))
          fs.writeFile(`${newAppPath}/webpack.config.js`, webpackContent(nameArg), () => {
            logYellow('HyperBox: Adding webpack...')
            exec(`cd ${newAppPath}; npm install -save webpack webpack-cli webpack-dev-server style-loader css-loader script-loader`, () => {
              logGreen('HyperBox: Added webpack.')
            });
          })
      });
      })
    });
  });
}
