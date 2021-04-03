const { exec } = require('child_process');
const fs = require('fs');
const webpackContent = require('./resources/webpack.content');
const htmlContent = require('./resources/indexhtml.content');
const readmeContent = require('./resources/readme.content');
const serverContent = require('./resources/serverjs.content');
const packageContent = require('./resources/packagejson-content');
const mainContent = require('./resources/mainbox-content');
const indexjsContent = require('./resources/indexjs-content');
const indexCssContent = require('./resources/indexcss-content');
const { logGreen, logYellow, logLoader } = require('./resources/utils');

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
          fs.mkdir(`${newAppPath}/public`, () => {
            logGreen('HyperBox: Added /public ✅');
            fs.copyFile(__dirname + '/resources/favicon.ico', `${newAppPath}/public/favicon.ico`, (...args) => {
              logGreen('HyperBox: Added /public/favicon.ico 📦 ✅');
            })
          });
          fs.mkdir(`${newAppPath}/src`, () => {
            logGreen('HyperBox: Added /src ✅')
            fs.writeFile(`${newAppPath}/src/index.html`, htmlContent(nameArg), () => {})
            fs.writeFile(`${newAppPath}/src/index.js`, indexjsContent(nameArg), () => {})
            fs.writeFile(`${newAppPath}/src/index.css`, indexCssContent(), () => {})
            fs.mkdir(`${newAppPath}/src/main`, () => {
              // Add the main box.
              fs.writeFile(`${newAppPath}/src/main/main.box.js`, mainContent(), () => {
                logGreen('HyperBox: Added your first box 📦')
              })
            })
          })
          fs.writeFile(`${newAppPath}/server.js`, serverContent(), () => logGreen('HyperBox: Added server.js ✅'))
          fs.writeFile(`${newAppPath}/webpack.config.js`, webpackContent(nameArg), () => {
            logYellow('HyperBox: Installing dependencies...')
            const timeout = logLoader();
            exec(`cd ${newAppPath}; npm i`, () => {
              clearTimeout(timeout);
              logGreen('HyperBox: Installed dependencies ✅ ⚡️')
              fs.mkdir(`${newAppPath}/dist`, () => {});
            });
          })
      });
      })
    });
  });
}
