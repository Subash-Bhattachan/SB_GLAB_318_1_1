// console.log("Hello World");
// console.log(4 + 2)

const http = require('http');
const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {

    if(req.url == "/") {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/html');
        res.write('<h1 style="color: red">Hello World!</h1>');
        res.write('<p>I wonder what else we can send......</p>');
        res.end();
    }
    else if(req.url == "/home") {
        res.end("<h1>Welcome to Home Page</h1>");
    }
    else if(req.url == "/about") {
        res.end("<h1>Welcome to About Us Page</h1>");
    }
    else if(req.url == "/contact") {
        res.end("<h1>Welcome to Contact Page</h1>");
    } else {
        res.writeHead(404, {"Content-type":"text/html"});
        res.end("<h1>404 Error, Page Not Found</h1>");
    }

    // res.statusCode = 200;
    // res.setHeader('Content-Type', 'text/html');
    // res.write('<h1 style="color: red">Hello World!</h1>');
    // res.write('<p>I wonder what else we can send......</p>');
    // res.end();
    //res.end('Hello World!\n');
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`)
})