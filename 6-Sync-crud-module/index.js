// const fs = require('fs');
// fs.mkdirSync('abhishek'); for make folder >node index.js 1


// const fs = require('fs');
// fs.writeFileSync("abhishek/bio.txt","hi hello this is abhishek how can i help you"); //create a file bio.txt and add some data on it 2


// const fs = require("fs");
// fs.appendFileSync("abhishek/bio.txt", " hello this one is appendFileSync");  its add the file at the end of the existing data 3


// const fs = require("fs");
// const data = fs.readFileSync("abhishek/bio.txt"); buffer data
//  console.log(data);
// output=><Buffer 68 69 20 68 65 6c 6c 6f 20 74 68 69 73 20 69 73 20 61 62 68 69 73 68 65 6b 20 68 6f 77 20 63 61 6e 20 69 20 68 65 6c 70 20 79 6f 75 68 65 6c 6c 6f 20 ... 59 more bytes>4


// const fs = require("fs");
// const data = fs.readFileSync("abhishek/bio.txt","utf-8"); without bufferdata4
//  console.log(data);
// output=>hi hello this is abhishek how can i help youhello this one is appendFileSync hello this one is appendFileSync


// rename the file name bio.txt to mybio.txt
// const fs = require("fs");
// fs.renameSync("abhishek/bio.txt", "abhishek/mybiodata.txt");


// delete all thing

// const fs = require("fs");
// fs.unlinkSync("abhishek/mybiodata.txt")

// fs.rmdirSync("abhishek");


// 1.fs.mkdirSync
// 2.fs.writeFileSync
// 3.fs.appendFileSync
// 4.fs.readFileSync
// 7 .fs.renameSync
// 5.fs.unlinkSync
// 6.fs.rmdirSync
