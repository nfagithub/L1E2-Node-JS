
var fs = require("fs");

console.log("Begin reading");

  var data = fs.readFileSync("input.txt");
  console.log(data.toString());
    console.log("End reading");

  console.log("\nAppending data");

  var data = fs.appendFileSync('input.txt', 'Adding new text here...');
  console.log('The data is appended!');
  console.log("\nBegin re-reading");

  var data = fs.readFileSync("input.txt");
  console.log(data.toString());
    console.log("Finish re-reading");