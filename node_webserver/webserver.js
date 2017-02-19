let http = require('http');
let path = require('path');
let fs = require('fs');
let Magic = require('mmmagic').Magic;

let magic = new Magic();
let server = http.createServer();

server.on('request', serverListen);

let mime = {
    html: 'text/html',
    txt: 'text/plain',
    css: 'text/css',
    gif: 'image/gif',
    jpg: 'image/jpeg',
    png: 'image/png',
    svg: 'image/svg+xml',
    js: 'application/javascript'
};

function serverListen(request, response) {
  //console.log(request.headers['user-agent']);
  let file = (request.url === "/") ? (__dirname + '/index.html') : (__dirname + request.url);
  //let extension = path.extname(request.url);
  //console.log(extension);
  console.log(file);
  let readstream = fs.createReadStream(file);

  var type = mime[path.extname(file).slice(1)] || 'text/plain';
  console.log(type);

  readstream.on('open', () => {
    response.setHeader('Content-Type', type)
    readstream.pipe(response);
  });

  // readstream.on('end', () => {
  //   //response.end(readstream.read());
  // });

/*
  fs.readFile(__dirname + request.url, 'utf-8', (err, data) => {
    if (!err) {
      //if (extension === '.html') {
        //response.statusCode = 200;
        response.writeHead(200, {'Content-Type': 'image/gif'});
        console.log(response);
        // response.end(data, 'binary');
      // } else if (extension === '.jpeg') {
        // console.log('Recognized JPG');
        // response.setHeader('Content-Type', 'text/html')
        // response.end(data);
      // }

    } else if (err) {
      if (err.code == 'ENOENT') {
        response.statusCode = 404;
        fs.readFile(__dirname + '/404.html', (err, data) => {
          response.end(data);
        });
      }
      return;
    }
  });
  */
}
server.listen(8888);