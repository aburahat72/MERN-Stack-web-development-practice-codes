var slugify = require("slugify");

let a = slugify("abu rahat"); // some-string

// if you prefer something other than '-' as separator
let b = slugify("some string", "-#"); // some_string

console.log(a);
console.log(b);
