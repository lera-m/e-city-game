var express = require('express');
var app = express();
var proxy = require('express-http-proxy');
 
app.use(express.static('build'));
app.use('/api', proxy('ecity.org.ua:8080'));
 
app.listen(3000);