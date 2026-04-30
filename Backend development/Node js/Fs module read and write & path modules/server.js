const { error } = require("console");
const fs = require("fs");
// console.log(fs);

console.log("start");
// fs.writeFileSync("Rahat.txt" , "Rahat is a developer");
fs.writeFile("Rahat.txt" , "Rahat is software engineer", () => {
    console.log("done")
    fs.readFile("Rahat.txt" , (error , data) =>{
        console.log(error, data.toString());
        // if i use this again and again it will be the callback hell
        // The code will not be maintainable 
    })

});

fs.appendFile("Rahat.txt", "and full stack developer", (e,d) => {
    console.log(d);
})
console.log("ended");

