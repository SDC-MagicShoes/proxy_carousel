module.exports = (title, body, scripts) => `
  <!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset='UTF-8'>
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>${title}</title>
      <link rel="icon" href="nike-swoosh-200x200.png">
      <link rel='stylesheet' href='/style.css'>
      <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons">
      <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto Condensed">
    </head>
    <body style="margin:0">
    ${body}
    </body>
    ${scripts}
  </html>
`;
