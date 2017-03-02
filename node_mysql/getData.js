//require your modules: express, and mysql
var express = require('express');
var http = require('http');
var mysql = require('mysql');
var fs = require('fs');

function connectToDB(res) {
  //define your connection info for mysql
  var connection = mysql.createConnection({
    host: 'localhost',
    port: '8889',
    user: 'root',
    password: 'root',
    database: 'c1.17'
  });

  //define your handler for your mysql connection callback
  	//perform your mysql query call
    connection.connect(mysqlcallback);

  //define your handler for your mysql query call response
  	//handle your data from your response
  	//return the data in json format to the front end request
  function mysqlcallback() {
    connection.query('SELECT * FROM students', query_callback);
  }

  function query_callback(e, rows, fields) {
    console.log('called query_callback');
    console.log(rows);
    res.end(JSON.stringify(rows));
  }
}

//define your handler for the express web request
  
//set up your express server and start listening
var app = express();

http.createServer(app);

app.get('/', function(req, res) {
  fs.readFile(__dirname + '/index.html', (err, data) => {
    if (err) throw err;
    res.end(data);
  });
});

app.get('/api', function(req, res) {
  console.log('api yes');
  connectToDB(res);
})

app.post('/', function(req, res) {
  console.log(body);
})

app.listen(3000, function() {
  console.log('ready');
});