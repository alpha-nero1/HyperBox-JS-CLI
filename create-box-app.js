const { exec } = require('child_process');
const fs = require('fs');
const path = require('path');
const webpackContent = require('./resources/webpack.content');
const htmlContent = require('./resources/indexhtml.content');
const readmeContent = require('./resources/readme.content');
const serverContent = require('./resources/serverjs.content');
const packageContent = require('./resources/packagejson-content');
const mainContent = require('./resources/mainbox-content');
const indexjsContent = require('./resources/indexjs-content');
const indexCssContent = require('./resources/indexcss-content');
const gitignoreContent = require('./resources/gitignore-content');
const { logGreen, logYellow, logLoader } = require('./resources/utils');

module.exports = (args) => {
  const nameArg = args[0];
  // Make new app folder with name.
  const newAppPath = path.join(process.cwd(), nameArg);
  fs.mkdir(nameArg, (mkdirErr) => {
    console.log(mkdirErr);
    if (mkdirErr) throw new Error('Could not create project file, perhaps it already exists?');
    exec(`cd ${newAppPath}; npm init --yes; git init`, (err, stdout, stderr) => {
      logGreen('HyperBox: initialised npm ✅');
      logGreen('HyperBox: initialised git ✅');
      fs.writeFile(`${newAppPath}/package.json`, packageContent(nameArg), () => {})
      logYellow('HyperBox: installing hyperbox-js...');
      const stopLoader = logLoader();
      exec(`cd ${newAppPath}; npm install --save hyperbox-js`, () => {
        stopLoader();
        logGreen('HyperBox: hyperbox installed. ✅');
        // Make readme.
        const readmePath = `${newAppPath}/README.md`;
        fs.writeFile(readmePath, readmeContent(nameArg), () => {
          const gitIgnorePath = `${newAppPath}/.gitignore`;
          // Make gitignore.
          fs.writeFile(
            gitIgnorePath, 
            gitignoreContent(nameArg),
          () => { });
          fs.mkdir(`${newAppPath}/public`, () => {
            logGreen('HyperBox: Added /public ✅');
            fs.copyFile(__dirname + '/resources/favicon.ico', `${newAppPath}/public/favicon.ico`, (...args) => {
              logGreen('HyperBox: Added /public/favicon.ico 📦 ✅');
            });
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
              });
            });
          });
          fs.writeFile(`${newAppPath}/server.js`, serverContent(), () => logGreen('HyperBox: Added server.js ✅'));
          fs.writeFile(`${newAppPath}/webpack.config.js`, webpackContent(nameArg), () => {
            logYellow('HyperBox: Installing dependencies...')
            const stopLoadingTwo = logLoader();
            exec(`cd ${newAppPath}; npm i`, () => {
              stopLoadingTwo();
              logGreen('HyperBox: Installed dependencies ✅ ⚡️')
              fs.mkdir(`${newAppPath}/dist`, () => {
                logGreen('HyperBox: Project setup complete!');
              });
            });
          });
      });
      });
    });
  });
}
