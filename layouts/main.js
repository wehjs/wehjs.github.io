module.exports = (file, files) =>
`
<!DOCTYPE html>
<html lang="en">
  <head>
    <title>awoo</title>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" href="/tachyons.css">
  </head>
  <body>
    <article class="pv2 ph5 sans-serif">
      <h1 class="f3 f2-m f1-l">${file.metadata.title}</h1>
      <div class="measure lh-copy">${file.contents}</div>
    </article>
  </body>
</html>
`
