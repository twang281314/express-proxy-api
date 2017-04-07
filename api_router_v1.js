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
router.post('/getChannelInfo',baseController.getChannelInfo);
router.post('/getSysConfig',baseController.getSysConfig);
router.post('/checkEligInfo',baseController.checkEligInfo);
router.post('/getAgreement',baseController.getAgreement);
router.post('/getCreditRiskLevel',baseController.getCreditRiskLevel);
router.post('/getRightInfo',baseController.getRightInfo);
router.post('/getTemplatePageNum',baseController.getTemplatePageNum);
router.post('/getEntrustWay',baseController.getEntrustWay);
router.post('/getEligPaper',baseController.getEligPaper);
router.post('/getBusiCtrlInfo',baseController.getBusiCtrlInfo);
router.post('/getBusiAccount',baseController.getBusiAccount);
router.post('/getSecuStock',baseController.getSecuStock);
router.post('/getClientFund',baseController.getClientFund);
router.post('/subAcptForm',baseController.subAcptForm);

module.exports = router;