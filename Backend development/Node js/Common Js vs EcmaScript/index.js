// (ES6)
// import http from "http" // es module

// default part
// const hostname = '127.0.0.1';
// const port = 3000;

// const server = http.createServer((req, res) => {
//   res.statusCode = 200;
//   res.setHeader('Content-Type', 'text/HTML');
//   res.end('<h1>Abu Rahat</h1>');
// });

// server.listen(port, hostname, () => {
//   console.log(`Server running at http://${hostname}:${port}/`);
// });
// default part end 

// import {a,b,c,d} from "./mymodule.js"; // named imports
// console.log(a,b,c,d);


import obj from "./mymodule.js";
console.log(obj);
// (/ES6)

// common js
// const http = require("http"); // common js
// const a = require("./mymodule2common.js"); // common js
// console.log(a);
// (/common js)