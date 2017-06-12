/*!
 * 公用方法：created by ミンヤング
 * last modified :31/05/2017  
 *
 */

export function animate(obj, json, interval, sp, fn) {
    clearInterval(obj.timer);

    function getStyle(obj, arr) {
        if (obj.currentStyle) {
            return obj.currentStyle[arr]; //针对ie
        } else {
            return document.defaultView.getComputedStyle(obj, null)[arr];
        }
    }
    obj.timer = setInterval(function() {
        //j ++;
        var flag = true;
        for (var arr in json) {
            var icur = 0;
            //k++;
            if (arr == "opacity") {
                icur = Math.round(parseFloat(getStyle(obj, arr)) * 100);
            } else {
                icur = parseInt(getStyle(obj, arr));
            }
            var speed = (json[arr] - icur) * sp;
            speed = speed > 0 ? Math.ceil(speed) : Math.floor(speed);
            if (icur != json[arr]) {
                flag = false;
            }
            if (arr == "opacity") {
                obj.style.filter = "alpha(opacity : '+(icur + speed)+' )";
                obj.style.opacity = (icur + speed) / 100;
            } else {
                obj.style[arr] = icur + speed + "px";
            }
        }

        if (flag) {
            clearInterval(obj.timer);
            if (fn) {
                fn();
            }
        }
    }, interval);
}
export function checks(datas) {
    var right = true;
    var tips = '';
    var data = datas;
    var oj = new Object();
    for (var i in data) {
        if (data[i] == null || data[i] == '') {
            right = false;
            switch(i)
             {
                case 'msg':
                     i='验证码'
                  break;
                case 'userName':
                    i='用户名'
                break;
                case 'secNum':
                     i='密码'
                  break;
                  case 'repNum':
                     i='重复密码'
                  break;
                   case 'email':
                     i='邮箱'
                  break;
                 default:
                 i='信息'
                }
            tips = i + '未填写'; //赋值未终止之前禁止return
            break;
        }
    }
    if (data.secNum !== data.repNum) {
        right = false;
        tips = '两次输入密码不一致';
    }
    if (data.msg !== data.c_msg) {
        right = false;
        tips = '验证码有误';
    }
    oj.r = right;
    oj.t = tips;
    return oj;
}
export function setCookies(name, value, days) {
    var d = new Date;
    d.setTime(d.getTime() + 24 * 60 * 60 * 1000 * days);
    window.document.cookie = name + "=" + value + ";path=/;expires=" + d.toGMTString();
}
export function getCookies(name) {
    var v = window.document.cookie.match('(^|;) ?' + name + '=([^;]*)(;|$)');
    return v ? v[2] : null;
}
export function delCookies(name) {
    setCookies(name, '', -1)
}

export function parseCookie(cookie) {
        var cookies = {};
        if (!cookie) {
                return cookie;
        }
        var list = cookie.split(';');
        for (var i = 0; i < list.length; i++) {
                var pair = list[i].split('=');
                cookies[pair[0].trim()] = pair[1];
        }
        return cookies;
}

export function serialize (name, val, opt) {
        var pairs = [name + '=' + val];
        opt = opt || {};

        if (opt.maxAge) pairs.push('Max-Age=' + opt.maxAge);
        if (opt.domain) pairs.push('Domain=' + opt.domain);
        if (opt.path) pairs.push('Path=' + opt.path);
        if (opt.expires) pairs.push('Expires=' + opt.exppires.toUTCString());
        if (opt.httpOnly) pairs.push('HttpOnly');
        if (opt.secure) pairs.push('Secure');

        return pairs.join(';');
}