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
        } if (reqData.dramaTypeName != null && reqData.dramaTypeName != '') {
            param += '&dramaTypeName=' + encodeURI(reqData.dramaTypeName, "UTF-8");
        }
        var getheaders = {
            'Content-Type': 'application/json; charset=UTF-8',
            'ip_address': req.hostname
        };
        var optionspost = {
            host: global.hostAddress,
            port: global.portNum,
            path: global.ctx + '/drama/solr' + param,// + '&access_token=' + token
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
    });
module.exports = router;