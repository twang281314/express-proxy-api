var fs = require('fs');

/**
 * 返回图像验证码
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 */
var captcha = function (req, res, next) {

  fs.readFile('img/captcha.png', 'binary', function (err, file) {
    if (err) {
      console.log(err);
      return;
    } else {
      res.writeHead(200, {
        'Content-Type': 'image/jpeg'
      });
      res.write(file, 'binary');
      res.end();
    }
  });
}

var login = function (req, res, next) {
  fs.readFile('api/v1/data/login.json', {
    encoding: 'utf-8'
  }, function (error, data) {
    if (error) console.log(error);
    res.send(data);
  });
}

exports.captcha = captcha;
exports.login = login;