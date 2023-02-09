// 1. create a folder named it abhishek
// 2. create a file in it  named  bio.txt and add data on it
// 3. add more data into the file at the end existing data.
// 4. read the data buffer and without buffer by using file encoding
// 5. rename the file name to mybio.txt
// 6. delete a folder and file

// const fs = require("fs");

// fs.mkdir("abhishek", () => { 
//     console.log("folder created") ---------------1
// });


// const abhi = require('fs');
// abhi.writeFile("./abhishek/bio.txt", " hello i am iron man", () => {       --------------2
//     console.log("created a file");
// });

// const fs = require('fs');

// fs.appendFile("./abhishek/bio.txt", " hello i am developer", () => {      -----------------3
//     console.log("file added")
// });


// const fs = require("fs");

// fs.readFile("./abhishek/bio.txt","UTF-8", (err,data) => { -------------4
//     console.log(data)
// });


// const fs = require("fs");
// fs.rename("./abhishek/bio.txt", "./abhishek/mybio.txt" , () => {  ------------5
//     console.log("file renamed");
// });


// const fs = require("fs");

// fs.unlink("./abhishek/mybio.txt",(err) => {
//     console.log("removed file");
// });



// const fs = require('fs');
// fs.rmdir("./abhishek", () => {
//     console.log('folder deleted');
// })

