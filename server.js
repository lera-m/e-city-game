var express = require('express');
var app = express();
var proxy = require('express-http-proxy');

app.use(express.static('build'));
app.use('/api', proxy('ecity.org.ua:8080', {
    decorateRequest: function (proxyReq, originalReq) {
        console.log(proxyReq.method, proxyReq.path);

        return proxyReq;
    }
}));

app.listen(3000);

console.log('Server started: http://dev.ecity.org.ua:3000/');
