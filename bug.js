const http = require('http');

const requestListener = (request, response) => {
  response.writeHead(200);
  response.end('Hello, World!');
};

const server = http.createServer(requestListener);

server.listen(8080);
console.log('Server is running at http://localhost:8080');
//The above code is a simple http server. It works fine but if you try to access it multiple times it might not work as expected. 
//This is because the server is not handling multiple requests concurrently. To handle multiple requests concurrently you need to use a different approach. 
//For example you can use the cluster module to create multiple child processes that each handle requests concurrently.