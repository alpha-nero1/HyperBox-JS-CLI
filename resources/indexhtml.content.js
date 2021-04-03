module.exports = (name) => (
`<!DOCTYPE html>
<html lang="en" dir="ltr">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>${name}</title>
  </head>
  <body>
    <div>
      <h1 class="title">Welcome to ${name}</h1>
      <p>Start building away with HyperBox-JS!</p>
      <a href="https://www.npmjs.com/package/hyperbox-js">Find out more about hyperbox-js</p>
    </div>
    <script src="../dist/bundle.js"></script>
  </body>
</html>
  `
);
