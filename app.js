var express = require('express');
var modRewrite = require('connect-modrewrite'); //api路由转发
var multipart = require('connect-multiparty'); //处理文件上传
var bodyParser = require('body-parser');
var apiProxyConfig = require('./apiProxyConfig');
var apiRouterV1 = require('./api_router_v1');
var cors = require('cors');
var fs = require('fs');
var path = require('path');
var app = express();

//处理 api proxy
app.use(modRewrite(apiProxyConfig.local));
app.use(bodyParser.json({limit: '1mb'}));
app.use(bodyParser.urlencoded({ extended: true, limit: '1mb' }));

app.use(multipart({
  uploadDir: "upload"
}));

// routes
app.use('/api/hsobm/v1', cors(), apiRouterV1);

/**
 * 处理文件上传
 */
app.post('/file/upload', function (req, res) {
  console.log(req.body);
  console.log('请求了2');
  var uploadResult = {};
  uploadResult.status = 'success';
  uploadResult.code = '0';
  fs.readFile(req.files.picToUpLoad.path, function (err, data) {　　
    uploadResult.img = data.toString("base64");
    res.header('Content-Type', 'text/html; charset=utf-8');
    //res.header('X-Frame-Options', 'SAMEORIGIN');
    res.send(uploadResult);
  });
});

app.get('/', function (req, res) {
    res.send('Hello World!');
});

var server = app.listen(3001, function () {
    var host = server.address().address;
    var port = server.address().port;

    console.log('app listening at http://%s:%s', host, port);
});