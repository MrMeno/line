var express = require('express');
var router = express.Router();
var http = require('http');
var util = require('util');
var buffer = require('buffer');
var multiparty = require('connect-multiparty');
var multipartMiddleware = multiparty();
var fs = require('fs');
var stringDecoder = require('string_decoder').StringDecoder;

router.get('/lists', function(req, res, next) { //获取演员导演列表
    const type = req.query.type; //123:电视剧，电影，综艺
    const staffType = req.query.staffType; //123:演员，导演，编剧
    var getheaders = {
        'Content-Type': 'application/json; charset=UTF-8'
    };
    var optionspost = {
        host: global.hostAddress,
        port: global.portNum,
        path: global.ctx + '/staff/lists?type=' + type + '&staffType=' + staffType,
        method: 'GET',
        headers: getheaders
    };
    var str = '';
    http.request(optionspost, function(response) {
        response.on('data', function(data) {
            str += data;
        });
        response.on('end', function() {
            res.send(str);
        });
    }).end();
}).get('/type_lists', function(req, res, next) { //获取该类型下的type列表
    const type = req.query.type; //123:电视剧，电影，综艺
    var getheaders = {
        'Content-Type': 'application/json; charset=UTF-8'
    };
    var optionspost = {
        host: global.hostAddress,
        port: global.portNum,
        path: global.ctx + '/drama/type_lists?type=' + type,
        method: 'GET',
        headers: getheaders
    };
    var str = '';
    http.request(optionspost, function(response) {
        response.on('data', function(data) {
            str += data;
        });
        response.on('end', function() {
            res.send(str);
        });
    }).end();
}).get('/drama/solr', function(req, res, next) {
    //   var token = req.cookies.access_token;
    var reqData = req.query;
    var param = '?page=' + reqData.page;
    if (reqData.rows != null && reqData.rows != '') {
        param += '&rows=' + encodeURI(reqData.rows, "UTF-8");
    }
    if (reqData.search != null && reqData.search != '') {
        param += '&search=' + encodeURI(reqData.search, "UTF-8");
    }
    if (reqData.type != null && reqData.type != '') { //type（0：影视剧名称 1：演员 2：导演 3：编剧）
        param += '&type=' + encodeURI(reqData.type, "UTF-8");
    }
    if (reqData.actorsName != null && reqData.actorsName != '') {
        param += '&actorsName=' + encodeURI(reqData.actorsName, "UTF-8");
    }
    if (reqData.directorsName != null && reqData.directorsName != '') {
        param += '&directorsName=' + encodeURI(reqData.directorsName, "UTF-8");
    }
    if (reqData.screenwritersName != null && reqData.screenwritersName != '') {
        param += '&screenwritersName=' + encodeURI(reqData.screenwritersName, "UTF-8");
    }
    if (reqData.dramaTypeName != null && reqData.dramaTypeName != '') {
        param += '&dramaTypeName=' + encodeURI(reqData.dramaTypeName, "UTF-8");
    }
    var getheaders = {
        'Content-Type': 'application/json; charset=UTF-8',
        'ip_address': req.hostname
    };
    var optionspost = {
        host: global.hostAddress,
        port: global.portNum,
        path: global.ctx + '/drama/solr' + param, // + '&access_token=' + token
        method: 'GET',
        headers: getheaders
    };
    var str = '';
    var decoder = new stringDecoder('UTF-8');
    http.request(optionspost, function(response) {
        response.on('data', function(data) {
            str += decoder.write(data);
        });
        console.log(str)
        response.on('end', function() {
            res.send(str);
        });

    }).end();
}).get('/permission', function(req, res, next) { //获取该类型下的type列表
    const access_token = req.query.access_token; //123:电视剧，电影，综艺
    var getheaders = {
        'Content-Type': 'application/json; charset=UTF-8'
    };
    var optionspost = {
        host: global.hostAddress,
        port: global.portNum,
        path: global.ctx + '/login/menu/resource?access_token=' + access_token,
        method: 'GET',
        headers: getheaders
    };
    var str = '';
    http.request(optionspost, function(response) {
        response.on('data', function(data) {
            str += data;
        });
        response.on('end', function() {
            res.send(str);
        });
    }).end();
}).post('/upload', multipartMiddleware, function(req, res, next) {
        var token = req.cookies.access_token;
        var files = req.files.file;
        console.log(req.cookies)
        var boundaryKey = Math.random().toString(16);
        var optionspost = {
            host: global.hostAddress,
            port: global.portNum,
            path: global.ctx + '/upload/picture?access_token=' + token,
            method: 'POST'
        };
        var reqPost = http.request(optionspost, function(resPost) {
            resPost.on('data', function(d) {
                res.send(d);
            });
        });

        var payload = '--' + boundaryKey + '\r\n' + 'Content-Type: image/jpeg\r\n' + 'Content-Disposition: form-data; name="image"; filename="' + files.name + '"\r\n' + 'Content-Transfer-Encoding: binary\r\n\r\n';

        var enddata = '\r\n--' + boundaryKey + '--';
        reqPost.setHeader('Content-Type', 'multipart/form-data; boundary=' + boundaryKey+'');
        reqPost.setHeader('Content-Length', Buffer.byteLength(payload) + Buffer.byteLength(enddata) + files.size);
        reqPost.write(payload);
        var fileStream = fs.createReadStream(files.path, { bufferSize: 4 * 1024 });
        fileStream.pipe(reqPost, { end: false });

        fileStream.on('end', function(d) {

            reqPost.end(enddata);
        });
        fileStream.on('close', function(d) {

        });

        reqPost.on('error', function(e) {

        });
    }).get('/user/user_info', function(req, res, next) {
        //用户信息查询
        var token = req.cookies.access_token;
        var optionspost = {
            host: global.hostAddress,
            port: global.portNum,
            path: global.ctx + '/userInfo?access_token=' + token,
            method: 'GET'
        };

        var str = '';
        http.request(optionspost, function(response) {
            response.on('data', function(data) {
                str += data;
            });
            response.on('end', function() {
                res.send(str);
            });
        }).end();
    }).get('/staff_list', function(req, res, next) {
        var type = req.query.type;//1演员 2导演 3编剧
        var getheaders = {
            'Content-Type': 'application/json; charset=UTF-8'
           };
        var optionspost = {
            host: global.hostAddress,
            port: global.portNum,
            path: global.ctx + '/staff/list?type=' + type,//firstPinyin
            method: 'GET',
            headers: getheaders,
        };
        console.log(optionspost.path);

        var str = '';
         var decoder = new stringDecoder('UTF-8');
        http.request(optionspost, function(response) {
            response.on('data', function(data) {
                str += decoder.write(data);
            });
            response.on('end', function() {
                res.send(str);
            });

        }).end();
    }).get('/select', function(req, res, next) {//查询列表
        var type = req.query.type;
        console.log(type)
        var getheaders = {
            'Content-Type': 'application/json; charset=UTF-8'
        };
         var path=global.ctx + '/select';
         if(type=='area'){
           path+='/areaList';
         }
         else if(type=='language')
         {
            path+='/languageList'
         }
         else if(type=='plat')
         {
            path+='/playPlatformList'
         }
         else if(type=='adver')
         {
            path+='/adverTypeList'
         }
         else if(type=='drama')
         {
            path+='/dramaTypeList'
         }
         else if(type=='staff')
         {
           path+='/staffList'
         }
         else if(type=='region')
         {
            path+='/regin'
         }
        var optionspost = {
            host: global.hostAddress,
            port: global.portNum,
            path: path,//firstPinyin
            method: 'GET',
            headers: getheaders,
        };
        console.log(optionspost.path);

        var str = '';
         var decoder = new stringDecoder('UTF-8');
        http.request(optionspost, function(response) {
            response.on('data', function(data) {
                str += decoder.write(data);
            });
            response.on('end', function() {
                res.send(str);
            });

        }).end();
    });
module.exports = router;