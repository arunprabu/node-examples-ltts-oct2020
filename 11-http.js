const http = require('http');

http.createServer( (req, res) => {
  console.log('Request is received');
  // req object will have url, http method, req params, query params

  console.log(req.url);
  res.writeHead(200, { "Content-Type": "text/html" });
  
  switch(req.url){
    case '/':
      res.write(`<html>
        <head>
          <title>Home Page</title>
        </head>
        <body>
          <h1>Welcome to Home Page</h1>
          <p>Success</p>
        </body>
      </html>`);
      break;
    case '/about':
      res.write(`<html>
        <head>
          <title>About Page</title>
        </head>
        <body>
          <h1>Welcome to About Page</h1>
          <p>Learn more about us...</p>
        </body>
      </html>`);
      break;
    case '/contact':
      res.write(`<html>
        <head>
          <title>Contact Page</title>
        </head>
        <body>
          <h1>Welcome to Contact Page</h1>
          <p>Contact form will come here...</p>
        </body>
      </html>`);
      break;
    default:
      res.write(`<html>
        <head>
          <title>404 | Page Not Found </title>
        </head>
        <body>
          <h1>404 - Page Not Found</h1>
          <a href='http://localhost:3000'>Go to Home Page</a>
        </body>
      </html>`);
  }

  res.end();
  
}).listen(3000, () => {
  console.log('The Server is started in Port 3000. Open http://localhost:3000 in your browser');
});