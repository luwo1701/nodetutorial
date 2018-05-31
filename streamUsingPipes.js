const fs = require('fs'); //file system module
const http = require('http')

const hostname = '127.0.0.1'; //loopback address (goes to localhost)
const port = 3000;
//pipe only works on readble streams piped to a write stream
const myWriteStream = fs.createWriteStream(__dirname + '/writeMe.txt');

//myReadStream.pipe(myWriteStream);

//using the pipe to send res to client

	const server = http.createServer( (req,res) => {
		//res.statusCode=200;
		res.writeHead(200, {'Content-type': 'text/html'}); //tells the content type of write\
        const myReadStream = fs.createReadStream(__dirname + '/index.html','utf8'); //tells create read stream its utf8 style
        //writes the read stream to the response
        myReadStream.pipe(res)
	})

	server.listen(port,hostname , () => {
		console.log('Server Started on port ' + port)
	})

/*same as
myReadStream.on('data', function (bufferChunk) {
	console.log(`bufferChunk received is ${bufferChunk}`);
    myWriteStream.write(bufferChunk) //writes txt from readMe.txt to writeMe file bit by bit
})
*/
