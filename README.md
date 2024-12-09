# Node.js Server Not Handling Multiple Requests Concurrently

This repository demonstrates a common issue in Node.js: a single-threaded server failing to handle multiple concurrent requests efficiently.  The provided code implements a simple HTTP server.  When subjected to a high load of concurrent requests, it will show signs of poor performance or even unresponsive behavior.

## Bug
The `bug.js` file shows a basic HTTP server created using the `http` module.  Because Node.js uses a single-threaded event loop, it can only handle one request at a time.  If multiple requests arrive simultaneously, subsequent requests are queued and may experience significant delays, leading to performance issues or request timeouts.

## Solution
The `bugSolution.js` file demonstrates how to address this concurrency issue by utilizing the `cluster` module. The `cluster` module allows you to create multiple child processes, each handling a portion of the incoming requests in parallel. This significantly improves the server's ability to handle concurrent connections.

## How to reproduce the bug
1. Clone this repository.
2. Navigate to the repository directory in your terminal.
3. Run `node bug.js`.
4. Open multiple browser tabs or use a tool like `ab` (Apache Benchmark) to send many requests simultaneously to `http://localhost:8080`.
5. Observe the server's performance and response times.  You'll likely see slow responses or some requests failing.

## How to run the solution
1. Run `node bugSolution.js`.
2. Repeat step 4 above.
3. You should observe significantly improved response times and the ability to handle more concurrent requests.