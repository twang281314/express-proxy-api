var express = require('express');
var modRewrite = require('connect-modrewrite'); //api路由转发
var apiProxyConfig = require('./apiProxyConfig');
var app = express();

//处理 api proxy
app.use(modRewrite(apiProxyConfig.dev));

app.get('/', function (req, res) {
    res.send('Hello World!');
});

var server = app.listen(3000, function () {
    var host = server.address().address;
    var port = server.address().port;

    console.log('app listening at http://%s:%s', host, port);
});