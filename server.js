const http=require('http');

const hostname = '127.0.0.1';
const port=5000;

const server=http.createServer((req,res)=>{
    res.statusCode=200; //200 = ok, 400: siden blev ik fundet fejlside


    res.setHeader('Content-Type', 'text/plain');

    res.end('Hello, World\n');
})

server.listen(port,hostname,()=>{
    console.log(`Server running at http://${hostname}:${port}/`);
});