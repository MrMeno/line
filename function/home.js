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
        headers: getheaders,
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
        headers: getheaders,
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
});
module.exports = router;