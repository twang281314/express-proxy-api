* 验证码
* 登录
地址：/hsobm/v1/login
格式：

```
{
    "data":
    {
        "user_token":"c8bddd88-2fcc-48b7-a8fb-7de41c77a42b",
        "client_name":"0109",
        "branch_no":{}
     }
}

```

http://localhost:8088/api/hsobm/v1/getDeployConfig

```
{"data":{"str_config":"http://im.foundersc.com/looyu/chat/p.do?c=2&v=e693178b-be76-4566-89cd-39fc3d2acbfc&u=e693178b-be76-4566-89cd-39fc3d2acbfc&f=2&ct=3&bc=&cn=&g=64&r=%23params%3Abh%2C%2Cvisitor_name%2C%2Cqdbs%2C2001&ln=&ref="}}
```

http://localhost:8088/api/hsobm/v1/getAccountView

```
{"data":[{"content":"[{\"exchange_type\":\"1\",\"stock_account\":\"A024613302\"},{\"exchange_type\":\"2\",\"stock_account\":\"0103472554\"}]","fund_account":"200059","asset_prop":"0","bank_name":"合行"}]}
```

http://localhost:8088/api/hsobm/v1/getClientDetailInfo

```
{"data":{"birthday":19870109,"zipcode":"100000","address":"1111111111111111111","email":"","client_name":"0109","client_id":"200059","id_kind":"0","id_no":"110105198701090010","issued_depart":"","id_begindate":11111111,"id_enddate":30001231,"id_address":"1111111111111111111","mobile_tel":"15868819690","home_tel":"13888888888","degree_code":"2","profession_code":"06","e_mail":"","sec_relation_name":"说到底","sec_relation_phone":"15712345678","socialral_type":"5","branch_name":"滨江营业部"}}
```

http://localhost:8088/api/hsobm/v1/qryDictEntry

user_token:c8bddd88-2fcc-48b7-a8fb-7de41c77a42b
dict_entry:1041
subentry:

```
{"data":[{"subentry":"0","dict_entry":"1041","dict_prompt":"身份证"},{"subentry":"1","dict_entry":"1041","dict_prompt":"外国护照"},{"subentry":"2","dict_entry":"1041","dict_prompt":"营业执照"},{"subentry":"3","dict_entry":"1041","dict_prompt":"军官证"},{"subentry":"4","dict_entry":"1041","dict_prompt":"社会保障号"},{"subentry":"A","dict_entry":"1041","dict_prompt":"批文"},{"subentry":"C","dict_entry":"1041","dict_prompt":"解放军文职干部证"},{"subentry":"D","dict_entry":"1041","dict_prompt":"警官证"},{"subentry":"E","dict_entry":"1041","dict_prompt":"解放军士兵证"},{"subentry":"F","dict_entry":"1041","dict_prompt":"户口簿"},{"subentry":"G","dict_entry":"1041","dict_prompt":"港澳居民来往内地通行证"},{"subentry":"H","dict_entry":"1041","dict_prompt":"台湾居民来往大陆通行证"},{"subentry":"I","dict_entry":"1041","dict_prompt":"外国人永久居留证"},{"subentry":"J","dict_entry":"1041","dict_prompt":"本国护照"},{"subentry":"K","dict_entry":"1041","dict_prompt":"武警文职干部证"},{"subentry":"L","dict_entry":"1041","dict_prompt":"武警士兵证"},{"subentry":"P","dict_entry":"1041","dict_prompt":"全国组织机构代码"},{"subentry":"Q","dict_entry":"1041","dict_prompt":"海外客户编号"},{"subentry":"R","dict_entry":"1041","dict_prompt":"境外身份证"},{"subentry":"T","dict_entry":"1041","dict_prompt":"事业法人登记证书"},{"subentry":"X","dict_entry":"1041","dict_prompt":"其他有效证件"},{"subentry":"i","dict_entry":"1041","dict_prompt":"香港地区居民身份证"},{"subentry":"j","dict_entry":"1041","dict_prompt":"澳门地区居民身份证"}]}
```


http://localhost:8088/api/hsobm/v1/qryDictEntry

user_token:c8bddd88-2fcc-48b7-a8fb-7de41c77a42b
dict_entry:1046
subentry:

```
{"data":[{"subentry":"1","dict_entry":"1046","dict_prompt":"博士"},{"subentry":"2","dict_entry":"1046","dict_prompt":"硕士"},{"subentry":"3","dict_entry":"1046","dict_prompt":"学士"},{"subentry":"4","dict_entry":"1046","dict_prompt":"大专"},{"subentry":"5","dict_entry":"1046","dict_prompt":"中专"},{"subentry":"6","dict_entry":"1046","dict_prompt":"高中"},{"subentry":"7","dict_entry":"1046","dict_prompt":"初中及其以下"},{"subentry":"8","dict_entry":"1046","dict_prompt":"其他"}]}
```


http://localhost:8088/api/hsobm/v1/qryDictEntry

user_token:c8bddd88-2fcc-48b7-a8fb-7de41c77a42b
dict_entry:1047
subentry:

```
{"data":[{"subentry":"01","dict_entry":"1047","dict_prompt":"文教科卫专业人员"},{"subentry":"02","dict_entry":"1047","dict_prompt":"党政 ( 在职，离退休 ) 机关干部"},{"subentry":"03","dict_entry":"1047","dict_prompt":"企事业单位干部"},{"subentry":"04","dict_entry":"1047","dict_prompt":"行政企事业单位工人"},{"subentry":"05","dict_entry":"1047","dict_prompt":"农民"},{"subentry":"06","dict_entry":"1047","dict_prompt":"个体"},{"subentry":"07","dict_entry":"1047","dict_prompt":"无业"},{"subentry":"08","dict_entry":"1047","dict_prompt":"军人"},{"subentry":"09","dict_entry":"1047","dict_prompt":"学生"},{"subentry":"10","dict_entry":"1047","dict_prompt":"证券从业人员"},{"subentry":"11","dict_entry":"1047","dict_prompt":"离退休"},{"subentry":"12","dict_entry":"1047","dict_prompt":"商业、地产等服务业从业人员"},{"subentry":"13","dict_entry":"1047","dict_prompt":"其他金融机构从业人员（除证券外）"},{"subentry":"14","dict_entry":"1047","dict_prompt":"自由职业者"},{"subentry":"15","dict_entry":"1047","dict_prompt":"国家机关、党群组织、企业、事业单位负责人"},{"subentry":"16","dict_entry":"1047","dict_prompt":"科学研究人员"},{"subentry":"17","dict_entry":"1047","dict_prompt":"信息技术、工程技术、农业技术、卫生专业技术人员"},{"subentry":"18","dict_entry":"1047","dict_prompt":"经济、金融业务人员"},{"subentry":"19","dict_entry":"1047","dict_prompt":"法律专业人员"},{"subentry":"20","dict_entry":"1047","dict_prompt":"教学人员，体育工作、新闻出版工作人员"},{"subentry":"21","dict_entry":"1047","dict_prompt":"安全保卫和消防人员"},{"subentry":"22","dict_entry":"1047","dict_prompt":"邮政和电信业务人员"},{"subentry":"23","dict_entry":"1047","dict_prompt":"交通运输、购销、仓储人员"},{"subentry":"24","dict_entry":"1047","dict_prompt":"餐饮、旅游服务人员"},{"subentry":"25","dict_entry":"1047","dict_prompt":"医疗卫生辅助服务、社会服务和居民生活服务人员"},{"subentry":"26","dict_entry":"1047","dict_prompt":"农、林、牧、渔、水利业生产人员"},{"subentry":"27","dict_entry":"1047","dict_prompt":"勘探、矿物开采、金属冶炼、轧制人员"},{"subentry":"28","dict_entry":"1047","dict_prompt":"机械制造加工、机械设备修理人员"},{"subentry":"29","dict_entry":"1047","dict_prompt":"电子元器件、机电产品及电力设备制造、装配、调试及维修人员"},{"subentry":"30","dict_entry":"1047","dict_prompt":"化工产品、橡胶及塑料制品生产人员"},{"subentry":"31","dict_entry":"1047","dict_prompt":"印染、纺织、缝纫人员，皮革制品加工制作人员"},{"subentry":"32","dict_entry":"1047","dict_prompt":"粮油、食品饮料、饲料生产加工人员"},{"subentry":"33","dict_entry":"1047","dict_prompt":"烟草及其制品加工人员、药品生产人员"},{"subentry":"34","dict_entry":"1047","dict_prompt":"木制品、纸制品、建筑材料、玻璃、陶瓷制品生产加工人员"},{"subentry":"35","dict_entry":"1047","dict_prompt":"广播影视作品、工艺美术品、文化体育用品制作人员，文物保护作业人员"},{"subentry":"36","dict_entry":"1047","dict_prompt":"文化工作、健身娱乐、珠宝业、博彩业、拍卖典当、艺术品收藏人员"},{"subentry":"37","dict_entry":"1047","dict_prompt":"废品收购工作人员"},{"subentry":"38","dict_entry":"1047","dict_prompt":"电子商务工作人员"},{"subentry":"39","dict_entry":"1047","dict_prompt":"离岸公司、国际组织工作人员"},{"subentry":"40","dict_entry":"1047","dict_prompt":"个体工商户、私营企业主"},{"subentry":"41","dict_entry":"1047","dict_prompt":"工程施工人员"},{"subentry":"42","dict_entry":"1047","dict_prompt":"环境监测与废物处理人员"},{"subentry":"43","dict_entry":"1047","dict_prompt":"检验、计量人员"},{"subentry":"44","dict_entry":"1047","dict_prompt":"专业投资者"},{"subentry":"99","dict_entry":"1047","dict_prompt":"其他"}]}
```

http://localhost:8088/api/hsobm/v1/loginOut