//  D:\Mern-stack-project\nodejs\13-NPM> npm init
// This utility will walk you through creating a package.json file.
// It only covers the most common items, and tries to guess sensible defaults.

// See `npm help init` for definitive documentation on these fields
// and exactly what they do.

// Use `npm install <pkg>` afterwards to install a package and
// save it as a dependency in the package.json file.

// Press ^C at any time to quit.
// package name: (13-npm) abhishek
// version: (1.0.0)
// description: abhishek beggin with nodejs
// entry point: (index.js)
// test command:
// git repository:
// keywords:
// author: abhishek kumar
// license: (ISC)
// About to write to D:\Mern-stack-project\nodejs\13-NPM\package.json:

// {
//   "name": "abhishek",
//   "version": "1.0.0",
//   "description": "abhishek beggin with nodejs",
//   "main": "index.js",
//   "scripts": {
//     "test": "echo \"Error: no test specified\" && exit 1"
//   },
//   "author": "abhishek kumar",
//   "license": "ISC"
// }


// Is this OK? (yes)

// const chalk = require('chalk');

// console.log(chalk.green.underline.inverse('false'));


const chalk = require('chalk');
const validator = require('validator');

const res = validator.isEmail("abhishek@mail.com");
console.log(res ? chalk.green.inverse(res) : chalk.red.inverse(res));
