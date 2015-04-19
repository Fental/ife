/**
 * Created by T on 2015/4/18.
 */
//判断arr是否为一个数组，返回一个bool值
function isArray(arr) {
    return arr instanceof Array;
}

//判断fn是否为一个函数，返回一个bool值
function isFunction(fn) {
    return fn instanceof Function;
}
console.log(isFunction(isArray));

//了解值类型和引用类型的区别，了解各种对象的读取、遍历方式
//使用递归来实现一个深度克隆，可以复制一个目标对象，返回一个完整拷贝
//被复制的对象类型会被限制为数字、字符串、布尔、日期、数组、Object
//对象。不包含函数、正则对象等
function cloneObject(src) {
    //my implement
    var result;
    switch (typeof src) {

        case "number":
            result = src + 0;
            break;
        case "boolean":
            result = src;
            break;
        case "string":
            result = src + "";
            break;
        case "object":
            if (src === null) {
                //typeof null 为object
                result = null;
            }
            else if (src instanceof Array) {
                result = [];
                for (var i = 0; i < src.length; i++) {
                    result.push(src[i]);
                }
            }
            else if (src instanceof Date) {
                result = new Date(src);
            }
            else {
                result = {};
                for (var j in src) {
                    if (src.hasOwnProperty(j)) {
                        result[j] = cloneObject(src[j]);
                    }
                }
            }
    }
    return result;
}
//测试用例：
var srcObj = {
    a: 1,
    b: {
        b1: ["hello", "hi"],
        b2: "JavaScript"
    },
    c: 2
};
var abObj = srcObj;
var tarObj = cloneObject(srcObj);

srcObj.a = 2;
srcObj.b.b1[0] = "Hello";

console.log(abObj.a);
console.log(abObj.b.b1[0]);

console.log(tarObj.a);
console.log(tarObj.b.b1[0]);


//学习数组、字符串、数字等相关方法
//对数组进行去重操作，只考虑数组中元素为数字或字符串，返回一个去重后的数组
function uniqArray(arr) {
    //my implement
    var result = [];
    for (var i = 0; i < arr.length; i++) {
        //indexOf() 方法可返回某个指定的字符串值在字符串中首次出现的位置。
        if (result.indexOf(arr[i]) === -1) {
            result.push(arr[i]);
        }
    }
    return result;
}

//example
var a = [1, 3, 5, 7, 5, 3];
var b = uniqArray(a);
console.log(b);

//非正则，对字符串头尾进行空格字符串的去除，包括拳脚半角空格、Tab等，返回一个字符串
function trim(str) {
    //my implement
    var result = [];
    for (var i = 0; i < str.length; i++) {
        if (str[i].indexOf("\t") === -1 //制表符
            && str[i].indexOf("\n") === -1
            && str[i].indexOf(" ") === -1
            && str[i].indexOf("\s") === -1  //uncion空白字符
            && str[i].indexOf("\r") === -1
            && str[i].indexOf("\f") === -1
            && str[i].indexOf("\v") === -1) {
            result.push(str[i]);
        }
    }
    return result.join("");
}

//example
var str = '   hi!  ';
str = trim(str);
console.log(str); // 'hi!'

//实现一个遍历数组的方法，针对数组中每一个元素执行fn函数，并将数组索引和元素作为参数传递
function each(arr, fn) {
    //my implement
    for (var i = 0;i < arr.length;i++) {
        //console.log(arr[i]);
        fn(arr[i], i);
    }
}

//example
var arr = ['java', 'c', 'php', 'html'];
function output(item, index) {
    console.log(item)
}
each(arr, output);  // java, c, php, html

//获取一个对象里面第一层元素的数量，返回一个整数
function getObjectLength(obj) {
    var length = 0;
    for (var i in obj) {
        if (obj.hasOwnProperty(i)) {
            length++;
        }
    }
    return length;
}

//example
var obj = {
    a: 1,
    b: 2,
    c: {
        c1: 3,
        c2: 4
    }
};
console.log(getObjectLength(obj)); // 3

//学习正则表达式
//判断是否为邮箱地址
function isEmail(emailStr) {
    var reg = /^[\da-z]+@[a-z]+.[a-z]+$/i;
    return emailStr.search(reg) !== -1;
}
//判断是否为手机号
function isMobilePhone(phone) {
    var reg = /^\d{11}$/;
    return phone.search(reg) !== -1;
}
var emailStr = "fengeeker@gmail.com";
console.log(isEmail(emailStr));
var phone = "15626475795";
console.log(isMobilePhone(phone));

//3
//为dom增加一个样式名为newClassName的样式
function addClass(element, newClassName) {
    element.className += " " + newClassName;
}

//移除dom中的样式oldClassName
function removeClass(element, oldClassName) {
    var oldClass = element.className.split(/\s+|\t+/);
    var newClass = [];
    for (var i = 0; i < oldClass.length; i++) {
        if (oldClass[i] !== oldClassName) {
            newClass.push(oldClass[i]);
        }
    }
    element.className = newClass.join(" ");
}

//判断siblingNode和dom是否为同一父元素下的同一级元素，返回bool值
function isSiblingNode(element, siblingNode) {
    return element.parentNode === siblingNode.parentNode;
}

//获取dom相对于浏览器窗口的位置，返回一个对象{x, y}
function getPosition(element) {
    //原理，视口坐标与文档坐标的转换
}

//mini $
//实现一个简单的Query
function $(selector) {
    if (selector === null || selector === undefined) {
        return document;
    }
    var selectors = selector.split(/\s+|\t+/);
    var domObject = document;
    for(var i = 0; i < selectors.length; i++) {
        domObject = domObject.querySelector(selectors[i]);
    }
    return domObject;
}

//4
//给一个dom绑定一个针对event事件的响应，响应函数为listener
function addEvent(element, event, listener) {
    //console.log(element.addEventListener);
    if (element.addEventListener) {
        element.addEventListener(event, listener, false);
    }
    else {
        element.attachEvent("on" + event, listener);
    }
}

//example
//function clicklistener(event) {
//    //...
//}
//addEvent($("#doma"), "click", clicklistener);

//移除dom对象对于event事件发生时执行listener的相应，当listener为空时，移出所有响应函数
function removeEvent(element, event, listener) {
    if(listener === undefined) {
        element["on" + event] = null;
    }
    else if (element.removeEventListener) {
        element.removeEventListener(event, listener, false);
    }
    else {
        element.detachEvent("on"+event, listener);
    }
}

//实现对click事件的绑定
function addClickEvent(element, listener) {
    if (element.addEventListener) {
        element.addEventListener("click", listener, false);
    }
    else {
        element.attachEvent("onclick", listener);
    }
}

//实现对于按Enter键时的事件绑定
function addEnterEvent(element, listener) {
    if(element.addEventListener) {
        element.addEventListener("keydown", function(event) {
            if(event.keyCode === 13) {
                listener();
            }
        }, false);
    }
    else {
        element.attachEvent("onkeydown", function(event) {
            if(event.keyCode === 13) {
                listener();
            }
        });
    }
}

//$.on = addEvent;
//$.un = removeEvent;
//$.click = addClickEvent;
//$.enter = addEnterEvent;

//事件代理 http://www.cnblogs.com/rubylouvre/archive/2009/08/09/1542174.html
function delegateEvent(element, tag, eventName, listener) {
    addEvent(element, eventName, function(e){
        var e = e || window.event;
        var target = e.srcElement ? e.srcElement : e.target;
        var targetName = target.nodeName.toLowerCase();
        if (targetName === tag) {
            listener(e);
        }
    });
}
//$.delegate = delegateEvent;

//封装处理
$.on = function(selector, event, listener) {
    var element = $(selector);
    addEvent(element, event, listener);
};
$.click = function(selector, listener) {
    var element = $(selector);
    addClickEvent(element, listener);
};
$.un = function(selector, event, listener) {
    var element = $(selector);
    removeEvent(element, event, listener);
};
$.delegate = function(selector, tag, event, listener) {
    var element = $(selector);
    delegateEvent(element, tag, event, listener);
};
//
//// 使用示例
//// 还是上面那段HTML，实现对list这个ul里面所有li的click事件进行响应
//$.delegate($("#list"), "li", "click", clickHandle);

//5. BOM:浏览器对象模型 browser object model
//判断是否为IE浏览器，返回-1或者版本号
function isIE() {
    //navigator有四个主要的属性
    //appName:web浏览器全称，ie中，这就是microsoft internet explorer；firefox和其他浏览器也取值为netscape
    //appVersion:此属性通常数字开始，包含浏览器厂商和版本信息的详细字符串。但没有标准格式，没法直接用来判断
    //userAgent:浏览器在user-agent http头部中发送的字符串，没有标准格式。但包含绝大部分信息，因此浏览器弹休代码通常用它来嗅探
    //platform:自欺上运行浏览器的操作系统（并且可能是硬件）的字符串。
    var ieVersion = (function() {
        var s = navigator.userAgent.toLowerCase();
        //ie 10以前版本号在msie后，11则在rv后
        var match = /(msie)\s(\d+.\d)/.exec(s) || /(rv):(\d+.\d)/.exec(s);
        if(match) {
            return match[2];
        }
        else {
            return -1;
        }
    })();
    return ieVersion;
}


//6. ajax
function ajax(url, options) {
    if(options.type === undefined) {
        options.type = "GET";
    }
    var request;
    var target = url;
    //ie7+及其他浏览器支持XMLHttpRequest
    if(window.XMLHttpRequest) {
        request = new XMLHttpRequest();
    }
    //老ie....
    else {
        request = window.ActiveXObject("Microsoft.XMLHTTP");
    }
    var encodeFromData = function(data) {
        var pairs = [];
        if(typeof data === "string") {
            return encodeURIComponent(data);
        }
        else if(typeof data === "object") {
            for (var i in data) {
                if (data.hasOwnProperty(i)) {
                    pairs.push(i + "=" + data[i].toString());
                }
            }
            return encodeURIComponent(pairs.join("&"));
        }
    };
    if (options.type === "GET") {
        target = target + "?" + encodeFromData(options.data);
        request.open(target,options.type);
        request.onreadystatechange = function(){
            if (request.readyState === 4 && request.status === 200) {
                options.onsuccess();
            }
            else if (request.readyState === 4 && request.status !== 200) {
                options.onfail();
            }
        };
        request.send();
    }
    else if (options.type === "POST") {
        request.open(url,options.type);
        request.onreadystatechange = function(){
            if (request.readyState === 4 && request.status === 200) {
                options.onsuccess();
            }
            else if (request.readyState === 4 && request.status !== 200) {
                options.onfail();
            }
        };
        request.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
        request.send(encodeFromData(options.data));
    }
}