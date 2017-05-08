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

var getDeployConfig = function (req, res, next) {
  fs.readFile('api/v1/data/getDeployConfig.json', {
    encoding: 'utf-8'
  }, function (error, data) {
    if (error) console.log(error);
    res.send(data);
  });
}

var getAccountView = function (req, res, next) {
  fs.readFile('api/v1/data/getAccountView.json', {
    encoding: 'utf-8'
  }, function (error, data) {
    if (error) console.log(error);
    res.send(data);
  });
}

var getClientDetailInfo = function (req, res, next) {
  fs.readFile('api/v1/data/getClientDetailInfo.json', {
    encoding: 'utf-8'
  }, function (error, data) {
    if (error) console.log(error);
    res.send(data);
  });
}

var qryDictEntry = function (req, res, next) {
  var dict_entry = req.body.dict_entry;
  fs.readFile('api/v1/data/qryDictEntry-' + dict_entry + '.json', {
    encoding: 'utf-8'
  }, function (error, data) {
    if (error) console.log(error);
    res.send(data);
  });
}

var loginOut = function (req, res, next) {
  fs.readFile('api/v1/data/loginOut.json', {
    encoding: 'utf-8'
  }, function (error, data) {
    if (error) console.log(error);
    res.send(data);
  });
}

var modIDcardInfo = function (req, res, next) {
  fs.readFile('api/v1/data/modIDcardInfo.json', {
    encoding: 'utf-8'
  }, function (error, data) {
    if (error) console.log(error);
    res.send(data);
  });
}

var submitIdKindImgUpload = function (req, res, next) {
  fs.readFile('api/v1/data/submitIdKindImgUpload.json', {
    encoding: 'utf-8'
  }, function (error, data) {
    if (error) console.log(error);
    res.send(data);
  });
}

var getChannelInfo = function (req, res, next) {
  fs.readFile('api/v1/data/getChannelInfo.json', {
    encoding: 'utf-8'
  }, function (error, data) {
    if (error) console.log(error);
    res.send(data);
  });
}

var getSysConfig = function (req, res, next) {
  fs.readFile('api/v1/data/getSysConfig.json', {
    encoding: 'utf-8'
  }, function (error, data) {
    if (error) console.log(error);
    res.send(data);
  });
}

var checkEligInfo = function (req, res, next) {
  fs.readFile('api/v1/data/checkEligInfo.json', {
    encoding: 'utf-8'
  }, function (error, data) {
    if (error) console.log(error);
    res.send(data);
  });
}

var getAgreement = function (req, res, next) {
  fs.readFile('api/v1/data/getAgreement.json', {
    encoding: 'utf-8'
  }, function (error, data) {
    if (error) console.log(error);
    res.send(data);
  });
}

var getCreditRiskLevel = function (req, res, next) {
  fs.readFile('api/v1/data/getCreditRiskLevel.json', {
    encoding: 'utf-8'
  }, function (error, data) {
    if (error) console.log(error);
    res.send(data);
  });
}

var getRightInfo = function (req, res, next) {
  fs.readFile('api/v1/data/getRightInfo.json', {
    encoding: 'utf-8'
  }, function (error, data) {
    if (error) console.log(error);
    res.send(data);
  });
}

var getTemplatePageNum = function (req, res, next) {
  fs.readFile('api/v1/data/getTemplatePageNum.json', {
    encoding: 'utf-8'
  }, function (error, data) {
    if (error) console.log(error);
    res.send(data);
  });
}

var getEntrustWay = function (req, res, next) {
  fs.readFile('api/v1/data/getEntrustWay.json', {
    encoding: 'utf-8'
  }, function (error, data) {
    if (error) console.log(error);
    res.send(data);
  });
}

var getEligPaper = function (req, res, next) {
  fs.readFile('api/v1/data/getEligPaper.json', {
    encoding: 'utf-8'
  }, function (error, data) {
    if (error) console.log(error);
    res.send(data);
  });
}

var getBusiCtrlInfo = function (req, res, next) {
  fs.readFile('api/v1/data/getBusiCtrlInfo.json', {
    encoding: 'utf-8'
  }, function (error, data) {
    if (error) console.log(error);
    res.send(data);
  });
}

var getBusiAccount = function (req, res, next) {
  fs.readFile('api/v1/data/getBusiAccount.json', {
    encoding: 'utf-8'
  }, function (error, data) {
    if (error) console.log(error);
    res.send(data);
  });
}

var getSecuStock = function (req, res, next) {
  var num = req.body.num;
  fs.readFile('api/v1/data/getSecuStock.json', {
    encoding: 'utf-8'
  }, function (error, data) {
    if (error) console.log(error);
    data[0].num=num;
    res.send(data);
  });
}

var getClientFund = function (req, res, next) {
  fs.readFile('api/v1/data/getClientFund.json', {
    encoding: 'utf-8'
  }, function (error, data) {
    if (error) console.log(error);
    res.send(data);
  });
}

var subAcptForm = function (req, res, next) {
  fs.readFile('api/v1/data/subAcptForm.json', {
    encoding: 'utf-8'
  }, function (error, data) {
    if (error) console.log(error);
    res.send(data);
  });

}

var checkCert = function (req, res, next) {
  fs.readFile('api/v1/data/checkCert.json', {
    encoding: 'utf-8'
  }, function (error, data) {
    if (error) console.log(error);
    res.send(data);
  });
}

var getCertList = function (req, res, next) {
  fs.readFile('api/v1/data/getCertList.json', {
    encoding: 'utf-8'
  }, function (error, data) {
    if (error) console.log(error);
    res.send(data);
  });
}

var getBusiHandleRecord = function (req, res, next) {
  fs.readFile('api/v1/data/getBusiHandleRecord.json', {
    encoding: 'utf-8'
  }, function (error, data) {
    if (error) console.log(error);
    res.send(data);
  });
}

var getRightsView = function (req, res, next) {
  fs.readFile('api/v1/data/getRightsView.json', {
    encoding: 'utf-8'
  }, function (error, data) {
    if (error) console.log(error);
    res.send(data);
  });
}

var getAgreementList = function (req, res, next) {
  fs.readFile('api/v1/data/getAgreementList.json', {
    encoding: 'utf-8'
  }, function (error, data) {
    if (error) console.log(error);
    res.send(data);
  });
}

var getStockHolderAccount = function (req, res, next) {
  fs.readFile('api/v1/data/getStockHolderAccount.json', {
    encoding: 'utf-8'
  }, function (error, data) {
    if (error) console.log(error);
    res.send(data);
  });
}
var getMobileTelInfo = function (req, res, next) {
  fs.readFile('api/v1/data/getMobileTelInfo.json', {
    encoding: 'utf-8'
  }, function (error, data) {
    if (error) console.log(error);
    res.send(data);
  });
}

var sendValidCode = function (req, res, next) {
  fs.readFile('api/v1/data/sendValidCode.json', {
    encoding: 'utf-8'
  }, function (error, data) {
    if (error) console.log(error);
    res.send(data);
  });
}

var openRight = function (req, res, next) {
  var stock_account = req.body.stock_account;
  fs.readFile('api/v1/data/openRight.json', {
    encoding: 'utf-8'
  }, function (error, data) {
    if (error) console.log(error);
    var result = JSON.parse(data);
    result.data.stock_account=stock_account;
    res.send(result);
  });
}
var signContract = function (req, res, next) {
  var stock_account = req.body.stock_account;
  fs.readFile('api/v1/data/signContract.json', {
    encoding: 'utf-8'
  }, function (error, data) {
    if (error) console.log(error);
    res.send(data);
  });
}
var checkPreRights = function (req, res, next) {
  var stock_account = req.body.stock_account;
  fs.readFile('api/v1/data/checkPreRights.json', {
    encoding: 'utf-8'
  }, function (error, data) {
    if (error) console.log(error);
    res.send(data);
  });
}

exports.captcha = captcha;
exports.login = login;
exports.getDeployConfig = getDeployConfig;
exports.getAccountView = getAccountView;
exports.getClientDetailInfo = getClientDetailInfo;
exports.qryDictEntry = qryDictEntry;
exports.loginOut = loginOut;
exports.modIDcardInfo = modIDcardInfo;
exports.submitIdKindImgUpload = submitIdKindImgUpload;
exports.getChannelInfo = getChannelInfo;
exports.getSysConfig = getSysConfig;
exports.checkEligInfo = checkEligInfo;
exports.getAgreement = getAgreement;
exports.getCreditRiskLevel = getCreditRiskLevel;
exports.getRightInfo = getRightInfo;
exports.getTemplatePageNum = getTemplatePageNum;
exports.getEntrustWay = getEntrustWay;
exports.getEligPaper = getEligPaper;
exports.getBusiCtrlInfo = getBusiCtrlInfo;
exports.getBusiAccount = getBusiAccount;
exports.getSecuStock = getSecuStock;
exports.getClientFund = getClientFund;
exports.subAcptForm = subAcptForm;
exports.checkCert = checkCert;
exports.getCertList = getCertList;
exports.getBusiHandleRecord = getBusiHandleRecord;
exports.getRightsView = getRightsView;
exports.getAgreementList = getAgreementList;
exports.getStockHolderAccount = getStockHolderAccount;
exports.getMobileTelInfo = getMobileTelInfo;
exports.sendValidCode = sendValidCode;
exports.openRight = openRight;
exports.signContract = signContract;
exports.checkPreRights = checkPreRights;