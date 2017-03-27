var express = require('express');
var baseController    = require('./api/v1/base');
var router  = express.Router();


// 主题
router.get('/captcha',baseController.captcha);

module.exports = router;