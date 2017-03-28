var express = require('express');
var baseController    = require('./api/v1/base');
var router  = express.Router();


// 主题
router.get('/captcha',baseController.captcha);
router.post('/login',baseController.login);
router.post('/getDeployConfig',baseController.getDeployConfig);
router.post('/getAccountView',baseController.getAccountView);
router.post('/getClientDetailInfo',baseController.getClientDetailInfo);
router.post('/qryDictEntry',baseController.qryDictEntry);
router.post('/loginOut',baseController.loginOut);
router.post('/modIDcardInfo',baseController.modIDcardInfo);
router.post('/submitIdKindImgUpload',baseController.submitIdKindImgUpload);

module.exports = router;