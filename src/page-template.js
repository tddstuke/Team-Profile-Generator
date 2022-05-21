module.exports = (templateData) => {
  const [Manager, ...employees] = templateData;

  return `
  <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <meta http-equiv="X-UA-Compatible" content="ie=edge">
      <link rel = "stylesheet" href = "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css">
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.9.1/css/bulma.min.css">
      <title>My Team Profile</title>
    </head>
    
    <body>
    <header>
    <div class = "is-flex is-justify-content-center has-background-danger has-text-primary-light">
    <h1>My Team<h1>
    </div>
    `;
};
