var express = require('express');
var http = require('http');
var qs = require('querystring');
var bodyParser = require('body-parser');
var router = express.Router();
//bug：req.body无效
router.post('/login', function(req, res, next) {
    var data={
        userName:req.query.userName,
        password:req.query.password
    }
    var reqJosnData = JSON.stringify(data); //pohone password
    var postheaders = {
        'Content-Type': 'application/json; charset=UTF-8',
        'Content-Length': Buffer.byteLength(reqJosnData, 'utf8')
    };

    // the post options  
    var optionspost = {
        host: global.hostAddress,
        port: global.portNum,
        path: global.ctx + '/login',
        method: 'POST',
        headers: postheaders

    };
    // do the POST call  
    var reqPost = http.request(optionspost, function(resPost) { //req.cookies.access_token

        resPost.on('data', function(d) {
            var json = JSON.parse(d);
            var ret = json.ret;
            if (ret == 0) {
                var token = json.msg;
                if (token != '' && token != undefined) {
                    res.cookie('access_token', token, { maxAge: 25 * 60 * 1000, path: '/' }); //25分钟过期
                }
            }
            res.send(d);

        });
    });
    // write the json data  
    // 发送REST请求时传入JSON数据  
    reqPost.write(reqJosnData);
    reqPost.end();
    reqPost.on('error', function(e) {

    });
}).post('/logout', function(req, res, next) {
    var reqJosnData = req.query.access_token;
    var postheaders = {
        'Content-Type': 'application/json; charset=UTF-8',
    };

    // the post options  
    var optionspost = {
        host: global.hostAddress,
        port: global.portNum,
        path: global.ctx + '/logout/' + reqJosnData,
        method: 'POST',
        headers: postheaders
    };
    // do the POST call  n
    var str = '';
    http.request(optionspost, function(response) {
        response.on('data', function(data) {
            str += data;
        });
        response.on('end', function() {
            res.send(str);
        });
    }).end();
}).post('/regist', function(req, res, next) {
    var datas = {
        userName: req.query.userName,
        type: req.query.type,
        password: req.query.password,
        repeatPasswd: req.query.repeatPasswd,
        email: req.query.email,
        verification: req.query.verification
    };
    var reqJosnData = JSON.stringify(datas);
    console.log(reqJosnData)
    var postheaders = {
        'Content-Type': 'application/json; charset=UTF-8',
        'Content-Length': Buffer.byteLength(reqJosnData, 'utf8')
    };

    // the post options  
    var optionspost = {
        host: global.hostAddress,
        port: global.portNum,
        path: global.ctx + '/register',
        method: 'POST',
        headers: postheaders

    };

    // do the POST call  
    var reqPost = http.request(optionspost, function(resPost) {

        resPost.on('data', function(d) {
            var json = JSON.parse(d);
            var ret = json.ret;
            if (ret == 0) {
                var token = json.msg;
                if (token != '' && token != undefined) {
                    res.cookie('access_token', token, { maxAge: 60 * 60 * 1000 * 24 * 2, path: '/' }); //25分钟过期
                }
            }
            res.send(d);

        });
    });
    // write the json data  
    // 发送REST请求时传入JSON数据  
    reqPost.write(reqJosnData);
    reqPost.end();
    reqPost.on('error', function(e) {});
}).post('/captcha', function(req, res, next) {
    var datas = {
        userName: req.query.userName,
        type: req.query.type
    };
    var reqJosnData = JSON.stringify(datas);
    console.log(reqJosnData);
    var postheaders = {
        'Content-Type': 'application/json; charset=UTF-8'
    };

    // the post options  
    var optionspost = {
        host: global.hostAddress,
        port: global.portNum,
        path: global.ctx + '/captcha',
        method: 'POST',
        headers: postheaders

    };
    // do the POST call  
    var reqPost = http.request(optionspost, function(resPost) {
        resPost.on('data', function(d) {
            res.send(d);
        });
    });
    // write the json data  
    // 发送REST请求时传入JSON数据  
    reqPost.write(reqJosnData);
    reqPost.end();
    reqPost.on('error', function(e) {});
}).post('/checkVerification', function(req, res, next) {
    var reqJosnData = JSON.stringify(req.body);
    var postheaders = {
        'Content-Type': 'application/json; charset=UTF-8',
        'Content-Length': Buffer.byteLength(reqJosnData, 'utf8')
    };

    // the post options  
    var optionspost = {
        host: global.hostAddress,
        port: global.portNum,
        path: global.ctx + '/userInfo/checkVerification',
        method: 'POST',
        headers: postheaders

    };

    // do the POST call  
    var reqPost = http.request(optionspost, function(resPost) {

        resPost.on('data', function(d) {
            var json = JSON.parse(d);
            var ret = json.ret;
            res.send(d);

        });
    });
    // write the json data  
    // 发送REST请求时传入JSON数据  
    reqPost.write(reqJosnData);
    reqPost.end();
    reqPost.on('error', function(e) {});
}).post('/resetPassword', function(req, res, next) {
    var reqJosnData = JSON.stringify(req.body);
    var token = req.query.token;
    var postheaders = {
        'Content-Type': 'application/json; charset=UTF-8',
        'Content-Length': Buffer.byteLength(reqJosnData, 'utf8')
    };

    // the post options  
    var optionspost = {
        host: global.hostAddress,
        port: global.portNum,
        path: global.ctx + '/userInfo/resetPassword?token=' + token,
        method: 'POST',
        headers: postheaders

    };

    // do the POST call  
    var reqPost = http.request(optionspost, function(resPost) {

        resPost.on('data', function(d) {
            var json = JSON.parse(d);
            var ret = json.ret;
            res.send(d);

        });
    });
    // write the json data  
    // 发送REST请求时传入JSON数据  
    reqPost.write(reqJosnData);
    reqPost.end();
    reqPost.on('error', function(e) {

    });
}).post('/save', function(req, res, next) {
    var token = req.query.access_token;
    var step=req.query.step;
    var data;
    if(Number(step)==2)
    {
     data = {
        nickName:req.query.nickName,
        name:req.query.name,
        remark:req.query.position//暂替的字段
    };
}
else if(Number(step)==3)
{
    data={
        company:req.query.company
        //缺省的字段
    }
}
    var reqJosnData = JSON.stringify(data);
    var postheaders = {
        'Content-Type': 'application/json; charset=UTF-8'
    };

    // the post options  
    var optionspost = {
        host: global.hostAddress,
        port: global.portNum,
        path: global.ctx + '/userInfo?access_token=' + token,
        method: 'POST',
        headers: postheaders

    };
    // do the POST call  
    var reqPost = http.request(optionspost, function(resPost) {
        resPost.on('data', function(d) {
            var json = JSON.parse(d);
            var ret = json.ret;
            res.send(d);

        });
    });
    // write the json data  
    // 发送REST请求时传入JSON数据  
    reqPost.write(reqJosnData);
    reqPost.end();
    reqPost.on('error', function(e) {});
}).get('/job', function(req, res, next) { //获取该类型下的type列表
    const type = req.query.type; //123:电视剧，电影，综艺
    var getheaders = {
        'Content-Type': 'application/json; charset=UTF-8'
    };
    var optionspost = {
        host: global.hostAddress,
        port: global.portNum,
        path: global.ctx + '/dictionary/job',
        method: 'GET',
        headers: getheaders
    };
    var str = '';
    http.request(optionspost, function(response){
        response.on('data', function(data) {
            str += data;
        });
        response.on('end', function(){
            res.send(str);
        });
    }).end();
}).get('/industry', function(req, res, next) { //获取该类型下的type列表
    const type = req.query.type; //123:电视剧，电影，综艺
    var getheaders = {
        'Content-Type': 'application/json; charset=UTF-8'
    };
    var optionspost = {
        host: global.hostAddress,
        port: global.portNum,
        path: global.ctx + '/dictionary/industry',
        method: 'GET',
        headers: getheaders
    };
    var str = '';
    http.request(optionspost, function(response){
        response.on('data', function(data) {
            str += data;
        });
        response.on('end', function(){
            res.send(str);
        });
    }).end();
});

module.exports = router;