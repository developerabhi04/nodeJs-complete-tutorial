const fs = require("fs");


// synchronous
const dada = fs.readFileSync("read.txt","utf-8");
console.log(dada);
console.log("after the data");


// Asynchronous
// const fs = require("fs");
// fs.readFile("read.txt","utf-8", (err,dada) => {
//     console.log(dada)
// });
// console.log("after the data");