const http = require('http');

//create your own server
http.createServer((req, res) => { // req and response objects are created
  console.log(req.url);
  console.log(req.method);
  console.log('request received by server');

  function generateTemplate(pageText) {
    res.write(
      `<html>
          <head>
              <title>${pageText} Page</title>
          </head>
          <body>
            <ul>
                <li><a href="http://localhost:3000">Home</a></li>
                <li><a href="http://localhost:3000/contact">Contact</a></li>
                <li><a href="http://localhost:3000/about">About</a></li>
            </ul>
              <h1>welcome to ${pageText} page</h1>
          </body>
      </html>`
    );
  }

  res.writeHead(200, { "Content-Type": "text/html" });

  switch (req.url) {
    case '/':
      generateTemplate('Home');
      break;

    case '/contact':
      generateTemplate('contact');
      break;

    case '/about':
      generateTemplate('about');
      break;

    default:
      res.write(
        `<html>
              <head>
                  <title>Page not found</title>
              </head>
              <body>               
                  <h1>404</h1>
                  <h3> page not found </h3>
                  <h2> return to <a href="http://localhost:3000">Homepage<a/></h2>
              </body>
          </html>`
      );
      break;
  }

  res.end();
}).listen(3000, () => {
  console.log('The server started. Open https://localhost:3000 on your browser.')
}); //listen specifies the port server is running on