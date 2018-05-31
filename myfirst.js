const http = require('http');
const fs = require('fs'); //file system module
//const exp = require('express')

const hostname = '127.0.0.1'; //loopback address (goes to localhost)
const port = 3000;



fs.readFile('index.html',(err,html) => {
	if(err){
		console.log("read file failed: ")
		throw err;
	}
	startServer(html)
})




function startServer(html){
//using arrow function as input to the createServer method
//callback function takes in a request (req) and a response (res)
	const server = http.createServer( (req,res) => {
		res.statusCode=200;
		res.setHeader('Content-type','text/html'); //tells the content type of write
		//is gonna be html
		res.write(html)
		res.end();
	})

	server.listen(port,hostname , () => {
		console.log('Server Started on port ' + port)
	})
}

//startServer(html)
 /*
http.createServer(function (req, res) {
	//200 is a https status code saying all is well
	//the second argument is a n object containing the response headers.
		res.writeHead(200, {'Content-Type': 'text/plain'});
		res.write('Hello World!');
		res.write(` the string following the url is ${req.url} `);
		res.end();
}).listen(8080);*/
