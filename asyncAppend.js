var fs = require("fs");

console.log("Begin reading");

fs.readFile('input.txt', function (err, data){
	if (err) return console.error(err);

	console.log(data.toString());
	console.log("End reading");

  console.log("\nAppending data");


  fs.appendFile('input.txt', 'Adding new text here..', (err) => {
    if (err) throw err;
    console.log('The data is appended!');

  console.log("\nBegin re-reading");

  fs.readFile('input.txt', function (err, data){
    if (err) return console.error(err);

    console.log(data.toString());
    console.log("Finish re-reading");
})
})
})

