

// const bioData = {
//     name: "abhishek",
//     middlename: "kumar",
//     lastname: "jain",
//     age: 27,
//     phone: 8998098849,
//     email: "developer04@outlook.com",
//     occupation: "software Engineer",
//     country: "europe"
// }


//1 // using JSON.strigfy it convert object to json 

// const jsonData = JSON.stringify(bioData);
// console.log(jsonData);

//2 // using JSON.parse it convert json to object or string

// const orgData = JSON.parse(jsonData);
// console.log(orgData);















// 1. convert to json.
// 2. dusre file me add karna dena hein
// 3. readfile
// 4. again convert back to json obj
// 5. console.log





// 1. convert in object to json    /   fs.writeFile / fs.appendFile

// const fs = require("fs");

// const bioData = {
//     name: 'abhishek',
//     middlename: 'kumar',
//     lastname: 'jain',
//     age: 27,
//     phone: 8998098849,
//     email: 'developer04@outlook.com',
//     occupation: 'software Engineer',
//     country: 'europe'
//   }


//   const objectData = JSON.stringify(bioData);

//   fs.writeFile("demo.json", objectData,(err) => {
//     console.log("json file added");
//   })

//   fs.appendFile("demo.json", objectData,(err) => {
//     console.log("json file added");
//   })



// 2. convert to json to string or object      fs.readFile


// const fs = require("fs");

// fs.readFile("demo.json", "utf-8" , (err,data) =>{
   // // console.log(data);
//     const objData = JSON.parse(data)
//     console.log(objData);
   
// })











