const http = require('http');
const fs = require('fs'); //file system module
const exp = require('express')

const hostname = '127.0.0.1'; //loopback address (goes to localhost)
const port = 3000;

var readStream = fs.createReadStream(__dirname + '/index.html')


function startServer(){
//using arrow function as input to the createServer method
//callback function takes in a request (req) and a response (res)

	const server = http.createServer( (req,res) => {
        if (req.url === '/'){
		res.writeHead(200,{'Content-Type':'text/html'}); //tells the content type of write
        readStream.pipe(res)
        }
        if (req.url==='/home'){
            res.writeHead(200,{'Content-Type':'text/plain'})
            res.end('home')
        }
        /*
        else{
            res.writeHead(200,{'Content-Type':'text/plain'})
            res.end('not a url')
        }*/
        
	})

	server.listen(port,hostname , () => {
		console.log('Server Started on port ' + port)
	})
}

startServer()
