// core modules----------------------------------
// const names = "abhishek";
// console.log(names);


// const fs = require("fs");
// fs.writeFileSync("read.text", "welcome to Abhishek in our company");



// const fs = require("fs");
// fs.appendFileSync("read.text", " how are you i am fine thank you");



const fs = require("fs");
// fs.readFileSync('read.text');



// const buf_data = fs.readFileSync('read.text');
// org_data = buf_data.toString();
// console.log(org_data);



// node.js include an additional data type called buffer
// buffer is mainly used to store binary data,
// while reading from a file or receiving packets over the network
{/* <Buffer 77 65 6c 63 6f 6d 65 20 74 6f 20 41 62 68 69 73 68 65 6b 20 69 6e 20 6f 75 72 20 63 6f 6d 70 61 6e 79 20 20 20 20 20 0d 0a 68 6f 77 20 61 72 65 20 79 ... 22 more bytes> */}


// const buf_data = fs.readFileSync('read.text');
// org_data = buf_data.toString();
// console.log(org_data);
// welcome to Abhishek in our company     
// how are you i am fine thank you

// fs.renameSync("read.text", "readcoreodule.txt")




fs.unlinkSync("readcoreodule.txt")