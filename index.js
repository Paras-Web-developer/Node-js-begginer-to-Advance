const fs = require("fs");
// Read File 
const fileContent = fs.readFileSync("./file.txt","utf-8")
console.log(fileContent);
// Write File 
fs.writeFileSync("writeFile.txt","Hi this is write file");
// than read file 
let writeFile=fs.readFileSync('writeFile.txt','utf-8')
console.log(writeFile)