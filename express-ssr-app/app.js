// developing expressjs based SSR app
const express = require('express');

const app = express();
const port = 3000;

// handling GET localhost:3000 
app.get('/', (req, res) => {
  // console.log(req); // request object
  console.log(`Processing GET Req for URL: ${req.url}`);
  let template = `<html>
    <head><title>Welcome to ExpressJS Based SSR App!</title></head>
    <body>
      <h1>Welcome to Home Page!!!!!</h1>
    </body>
  </html>`;

  res.send(template);
});

app.get('/about', (req, res)=>{
  console.log(`Processing GET Req for URL: ${req.url}`);

  let template = `<html>
    <head><title>About - SSR App</title></head>
    <body>
      <h1>Welcome to About Page!!!!!</h1>
    </body>
  </html>`;
  res.send(template);
});

app.get('/contact', (req, res) => {
  console.log(`Processing GET Req for URL: ${req.url}`);

  let template = `<html>
    <head><title>Contact - SSR App</title></head>
    <body>
      <h1>Welcome to Contact Page!!!!!</h1>
    </body>
  </html>`;
  res.send(template);
});

app.listen(port, () => {
  console.log(`ExpressJS - SSR app is listening at http://localhost:${port}`);
});