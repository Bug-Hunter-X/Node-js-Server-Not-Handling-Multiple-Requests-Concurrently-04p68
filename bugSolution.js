const cluster = require('cluster');
const numCPUs = require('os').cpus().length;
const http = require('http');

if (cluster.isMaster) {
  console.log(`Master ${process.pid} is running`);

  // Fork workers.
  for (let i = 0; i < numCPUs; i++) {
    cluster.fork();
  }

  cluster.on('exit', (worker, code, signal) => {
    console.log(`worker ${worker.process.pid} died`);
  });
} else {
  const server = http.createServer((req, res) => {
    res.writeHead(200);
    res.end('Hello World\n');
  });

  server.listen(8080);
  console.log(`Worker ${process.pid} started`);
}