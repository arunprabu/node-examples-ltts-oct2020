const http = require('http');

http.createServer( (req, res) => {
  console.log('Request is received');
  // req object will have url, http method, req params, query params

  res.writeHead(200, { "Content-Type": "text/html" });
  res.write(`<html>
    <head>
      <title>Home Page</title>
    </head>
    <body>
      <h1>Welcome to Home Page</h1>
      <p>Success</p>
    </body>
  </html>`);
  res.end();
  
}).listen(3000, () => {
  console.log('The Server is started in Port 3000. Open http://localhost:3000 in your browser');
});