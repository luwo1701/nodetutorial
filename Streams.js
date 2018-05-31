const fs = require('fs'); //file system module

//takes on the readme file in a buffer style stream breaking it up into manageable pieces of data
const myReadStream = fs.createReadStream(__dirname + '/readMe.txt','utf8'); //tells create read stream its utf8 style
const myWriteStream = fs.createWriteStream(__dirname + '/writeMe.txt');

myReadStream.on('data', function (bufferChunk) {
	console.log(`bufferChunk received is ${bufferChunk}`);
    myWriteStream.write(bufferChunk) //writes txt from readMe.txt to writeMe file bit by bit
})
