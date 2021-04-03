const consoleColours = require('./console-colours');

module.exports = {
  logGreen: (str) => console.log(`${consoleColours.FgGreen}${str}${consoleColours.Reset}`),
  logYellow: (str) => console.log(`${consoleColours.FgYellow}${str}${consoleColours.Reset}`),
  logLoader: () => ((() => {
    var P = [".", "..", "..."];
    var x = 0;
    return setInterval(() => {
      process.stdout.write("\r" + P[x++]);
      x &= 3;
    }, 250);
  })()
  )
}