const consoleColours = require('./console-colours');

module.exports = {
  logGreen: (str) => console.log(`${consoleColours.FgGreen}${str}${consoleColours.Reset}`),
  logYellow: (str) => console.log(`${consoleColours.FgYellow}${str}${consoleColours.Reset}`)
}