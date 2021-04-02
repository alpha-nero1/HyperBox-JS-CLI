module.exports = (name) => (
`<!-- index.html --><!DOCTYPE html>
  <html lang="en" dir="ltr">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <meta http-equiv="X-UA-Compatible" content="ie=edge">
      <title>${name}</title>
    </head>
    <body><script src="/bundle.js"></script>
      <div>
        <h1>Welcome to ${name}</h1>
        <p>Start building away!</p>
      </div>
    </body>
  </html>
  `
);
