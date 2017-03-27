/*
 * @Author: anytao 
 * @Description: 后端api代理配置
 * @Date: 2017-03-23 10:57:46 
 * @Last Modified by: anytao
 * @Last Modified time: 2017-03-23 10:57:46 
 */

var apiProxyConfig = {

    local: [
        // '^/api/(.*)$ http://localhost:3000/api/$1 [P]',
        // '^/api/(.*)$ http://localhost:3000/$1 [P]',
        '^/local_api/(.*)$ http://127.0.0.1:8081/$1 [P]', 
        '^/uploadFile_api/(.*)$ http://localhost:8081/$1 [P]'
    ],
    dev: [
        '^/api/base(.*)$ http://192.168.6.24:8080/base/$1 [P]',
        '^/api/labor(.*)$ http://192.168.6.24:8180/labor/$1 [P]',
        '^/api/warehouse(.*)$ http://192.168.6.24:8280/warehouse/$1 [P]',
        '^/api/transportation(.*)$ http://192.168.6.24:8380/transportation/$1 [P]',
        '^/api/supply(.*)$ http://192.168.6.24:8480/supply/$1 [P]',
        '^/api/datasync(.*)$ http://192.168.6.24:9180/datasync/$1 [P]',
        '^/local_api/(.*)$ http://127.0.0.1:8081/$1 [P]' 
    ],
    cit: [
        '^/api/base(.*)$ http://192.168.6.31:8080/base/$1 [P]',
        '^/api/labor(.*)$ http://192.168.6.31:8180/labor/$1 [P]',
        '^/api/warehouse(.*)$ http://192.168.6.31:8280/warehouse/$1 [P]',
        '^/api/transportation(.*)$ http://192.168.6.31:8380/transportation/$1 [P]',
        '^/api/supply(.*)$ http://192.168.6.31:8480/supply/$1 [P]',
        '^/api/datasync(.*)$ http://192.168.6.31:9180/datasync/$1 [P]',
        '^/local_api/(.*)$ http://127.0.0.1:8081/$1 [P]'
    ],
    test: [
        '^/api/base(.*)$ http://192.168.6.24:8080/base/$1 [P]',
        '^/api/labor(.*)$ http://192.168.6.24:8180/labor/$1 [P]',
        '^/api/warehouse(.*)$ http://192.168.6.24:8280/warehouse/$1 [P]',
        '^/api/transportation(.*)$ http://192.168.6.24:8380/transportation/$1 [P]',
        '^/api/supply(.*)$ http://192.168.6.24:8480/supply/$1 [P]',
        '^/api/datasync(.*)$ http://192.168.6.24:9180/datasync/$1 [P]',
        '^/local_api/(.*)$ http://127.0.0.1:8081/$1 [P]' 
    ]
};

module.exports = apiProxyConfig;