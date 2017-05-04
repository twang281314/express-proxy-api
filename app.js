var express = require('express');
var modRewrite = require('connect-modrewrite'); //api路由转发
var bodyParser = require('body-parser');
var apiProxyConfig = require('./apiProxyConfig');
var apiRouterV1 = require('./api_router_v1');
var cors = require('cors');
var app = express();

//处理 api proxy
app.use(modRewrite(apiProxyConfig.local));
app.use(bodyParser.json({limit: '1mb'}));
app.use(bodyParser.urlencoded({ extended: true, limit: '1mb' }));

// routes
app.use('/api/hsobm/v1', cors(), apiRouterV1);

app.get('/', function (req, res) {
    res.send('Hello World!');
});

var server = app.listen(3001, function () {
    var host = server.address().address;
    var port = server.address().port;

    console.log('app listening at http://%s:%s', host, port);
});