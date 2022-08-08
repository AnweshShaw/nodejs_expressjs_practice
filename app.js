/*function sayHello(name)
{
    console.log('Hello '+name);
}
sayHello('Anwesh');*/
/*console.log(module);
var logger = require('./logger.js');
console.log(logger);*/

/*const log = require('./logger.js');
log('message');*/
/*const path = require('path');
var pathObj = path.parse(__filename);
console.log(pathObj);*/
/*const os = require('os');
var totalMemory = os.totalmem();
var freeMemory = os.freemem();
console.log('Total Memory: ' +totalMemory);
console.log('Free Memory: ' +freeMemory);*/

/*const fs = require('fs');
const files = fs.readdirSync('./');
console.log(files);*/
/*fs.readdir('./',function(err,files)
{
    if(err) console.log('Error',err);
    else console.log('Result',files);
});*/

/*const EventEmitter = require('events');
const emitter = new EventEmitter();
// Register a Listener
emitter.on('messageLogged',function(arg)
{
    console.log('Listener called', arg);
});

// Raise an event
emitter.emit('messageLogged', {id:1, url:'http://'});*/

const http = require('http');
const server = http.createServer((req,res)=>{
    if (req.url === '/') {
        res.write('Hello World');
        res.end();
    if (req.url === '/api/courses')
    res.write(JSON.stringify([1,2,3]))
    res.end();
    }
});

server.listen(3000);
console.log('Listening on port 3000...');