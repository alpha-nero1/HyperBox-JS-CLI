module.exports = (name) => (
`const startBoxApp = require('hyperbox-js/start-box-server');

startBoxApp(\`${__dirname}/src\`);
  `
);
