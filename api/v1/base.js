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
exports.captcha = captcha;