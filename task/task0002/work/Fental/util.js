/**
 * Created by T on 2015/4/18.
 */
//�ж�arr�Ƿ�Ϊһ�����飬����һ��boolֵ
function isArray(arr) {
    //my implement
    return arr instanceof Array;
}

//�ж�fn�Ƿ�Ϊһ������������һ��boolֵ
function isFunction(fn) {
    //my implement
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
//function addClass(element, newClassName) {
//    //document.getElementById()
//}



//mini $
//ʵ��һ���򵥵�Query
function $(selector) {
    if (selector === null || selector === undefined) {
        return document;
    }
    var selectors = selector.split(/\s+|\t+/);
    var domObject = document;
    //console.log(selectors);
    for(var i = 0; i < selectors.length; i++) {
        //console.log(selectors[i]);
        domObject = domObject.querySelector(selectors[i]);
    }
    return domObject;
}

//4
//��һ��dom��һ�����event�¼�����Ӧ����Ӧ����Ϊlistener
function addEvent(element, event, listener) {
    if (element.addEventListener) {
        element.addEventListener(event, listener, false);
    }
    else {
        element.attachEvent("on" + event, listener);
    }
}

//example
function clicklistener(event) {
    //...
}
addEvent($("#doma"), "click", clicklistener);

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


