const http = require('http');

// you can create your own server
http.createServer( (req, res)=> { // req object , res object
  console.log('Request Received');
  console.log(req.url);

  res.write('Welcome to Home Page!');
  res.end();

}).listen(3000, ()=>{
  console.log('The Server is started in Port 3000. Open http://localhost:3000 in your browser');
});
