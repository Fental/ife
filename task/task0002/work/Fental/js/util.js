/**
 * Created by T on 2015/4/18.
 */
//�ж�arr�Ƿ�Ϊһ�����飬����һ��boolֵ
function isArray(arr) {
    return arr instanceof Array;
}

//�ж�fn�Ƿ�Ϊһ������������һ��boolֵ
function isFunction(fn) {
    return fn instanceof Function;
}
console.log(isFunction(isArray));

//�˽�ֵ���ͺ��������͵������˽���ֶ���Ķ�ȡ��������ʽ
//ʹ�õݹ���ʵ��һ����ȿ�¡�����Ը���һ��Ŀ����󣬷���һ����������
//�����ƵĶ������ͻᱻ����Ϊ���֡��ַ��������������ڡ����顢Object
//���󡣲�������������������
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
                //typeof null Ϊobject
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
//����������
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


//ѧϰ���顢�ַ��������ֵ���ط���
//���������ȥ�ز�����ֻ����������Ԫ��Ϊ���ֻ��ַ���������һ��ȥ�غ������
function uniqArray(arr) {
    //my implement
    var result = [];
    for (var i = 0; i < arr.length; i++) {
        //indexOf() �����ɷ���ĳ��ָ�����ַ���ֵ���ַ������״γ��ֵ�λ�á�
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

//�����򣬶��ַ���ͷβ���пո��ַ�����ȥ��������ȭ�Ű�ǿո�Tab�ȣ�����һ���ַ���
function trim(str) {
    //my implement
    var result = [];
    for (var i = 0; i < str.length; i++) {
        if (str[i].indexOf("\t") === -1 //�Ʊ��
            && str[i].indexOf("\n") === -1
            && str[i].indexOf(" ") === -1
            && str[i].indexOf("\s") === -1  //uncion�հ��ַ�
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

//ʵ��һ����������ķ��������������ÿһ��Ԫ��ִ��fn��������������������Ԫ����Ϊ��������
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

//��ȡһ�����������һ��Ԫ�ص�����������һ������
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

//ѧϰ������ʽ
//�ж��Ƿ�Ϊ�����ַ
function isEmail(emailStr) {
    var reg = /^[\da-z]+@[a-z]+.[a-z]+$/i;
    return emailStr.search(reg) !== -1;
}
//�ж��Ƿ�Ϊ�ֻ���
function isMobilePhone(phone) {
    var reg = /^\d{11}$/;
    return phone.search(reg) !== -1;
}
var emailStr = "fengeeker@gmail.com";
console.log(isEmail(emailStr));
var phone = "15626475795";
console.log(isMobilePhone(phone));

//3
//Ϊdom����һ����ʽ��ΪnewClassName����ʽ
function addClass(element, newClassName) {
    element.className += " " + newClassName;
}

//�Ƴ�dom�е���ʽoldClassName
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

//�ж�siblingNode��dom�Ƿ�Ϊͬһ��Ԫ���µ�ͬһ��Ԫ�أ�����boolֵ
function isSiblingNode(element, siblingNode) {
    return element.parentNode === siblingNode.parentNode;
}

//��ȡdom�������������ڵ�λ�ã�����һ������{x, y}
function getPosition(element) {
    //ԭ���ӿ��������ĵ������ת��
}

//mini $
//ʵ��һ���򵥵�Query
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
//��һ��dom��һ�����event�¼�����Ӧ����Ӧ����Ϊlistener
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

//�Ƴ�dom�������event�¼�����ʱִ��listener����Ӧ����listenerΪ��ʱ���Ƴ�������Ӧ����
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

//ʵ�ֶ�click�¼��İ�
function addClickEvent(element, listener) {
    if (element.addEventListener) {
        element.addEventListener("click", listener, false);
    }
    else {
        element.attachEvent("onclick", listener);
    }
}

//ʵ�ֶ��ڰ�Enter��ʱ���¼���
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

//�¼����� http://www.cnblogs.com/rubylouvre/archive/2009/08/09/1542174.html
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

//��װ����
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
//// ʹ��ʾ��
//// ���������Ƕ�HTML��ʵ�ֶ�list���ul��������li��click�¼�������Ӧ
//$.delegate($("#list"), "li", "click", clickHandle);

//5. BOM:���������ģ�� browser object model
//�ж��Ƿ�ΪIE�����������-1���߰汾��
function isIE() {
    //navigator���ĸ���Ҫ������
    //appName:web�����ȫ�ƣ�ie�У������microsoft internet explorer��firefox�����������ҲȡֵΪnetscape
    //appVersion:������ͨ�����ֿ�ʼ��������������̺Ͱ汾��Ϣ����ϸ�ַ�������û�б�׼��ʽ��û��ֱ�������ж�
    //userAgent:�������user-agent httpͷ���з��͵��ַ�����û�б�׼��ʽ�����������󲿷���Ϣ�������������ݴ���ͨ����������̽
    //platform:����������������Ĳ���ϵͳ�����ҿ�����Ӳ�������ַ�����
    var ieVersion = (function() {
        var s = navigator.userAgent.toLowerCase();
        //ie 10��ǰ�汾����msie��11����rv��
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
    //ie7+�����������֧��XMLHttpRequest
    if(window.XMLHttpRequest) {
        request = new XMLHttpRequest();
    }
    //��ie....
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