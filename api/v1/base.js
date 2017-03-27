

/**
 * 返回图像验证码
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 */
var captcha = function(req, res, next){
  res.send('true');
}
exports.captcha = captcha;