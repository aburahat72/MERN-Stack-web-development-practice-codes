import fs from "fs/promises"
let a = await fs.readFile("Rahat.txt");
console.log(a.toString());
let b = await fs.writeFile("Rahat.txt" , ("Manipal university jaipur"));
console.log(b);
let c = await fs.appendFile("Rahat.txt", ("wellcome to the deveops world"));
console.log(c); 