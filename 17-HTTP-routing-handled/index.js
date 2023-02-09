// http routing handel.

// const http = require("http");

// const server = http.createServer((req, res) => {
//     if(req.url == '/'){
//         res.end("this is home page");
//     }else if(req.url == '/about'){
//         res.end('this is about page');
//     }else if(req.url == '/contact'){
//         res.end('this is contact page')
//     }else{
//         res.writeHead(404, {"Content/type": "text/html"});
//         res.end("<h1>404 error, pages doesn't exists</h1>");
//     }
    
// });

// server.listen(8000, () => {
//     console.log("server is running in 8000");
// })

const http = require("http")
const port = 8000;

const server = http.createServer((req, res) => {
    if(req.url == '/'){
        console.log('this is home page');
    }else if(req.url == '/about'){
        console.log('this is about page');
    }else if(req.url == '/contact'){
        console.log('this is contact page');
    }else{
        
    }
})