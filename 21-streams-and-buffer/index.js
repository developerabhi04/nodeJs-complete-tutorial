// 2nd way
// reading from a stream 
// create a readable stream
// handle stream events -> data, end, ans ,error

const fs = require("fs");
const http = require("http");

const server = http.createServer();

// server.on("request", (req, res)=>{
//  fs.readFile("input.txt", (err, data) => {
//     if (err) return console.error(err);
//     res.end(data.toString());
//  });
// });


// server.on("request", (req, res) => {

//     const rstream = fs.createReadStream("input.txt");

//     rstream.on("data", (chunkdata) => {
//         res.write(chunkdata);
//     });
//     rstream.on("end", () =>{
//         res.end();
//     });
//     rstream.on("error", (err)=>{
//         console.log(err);
//         res.end("file not found"  )
//     })

// })



server.on("request", (req, res) => {


const rstream = fs.createReadStream("input.txt");
rstream.pipe(res)

})








server.listen(8000, () => {
    console.log("server is running port 8000");
})