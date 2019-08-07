/**
 * @Description: 从根本上实现对象深拷贝
 * @author Phoebus
 * @date 2019-8-7
*/

/*
* 深拷贝：递归解析实现
*
* */

var father = {
    name: 'phoebus',
    age: 24,
    friend: ['书', '音乐', '大自然'],
    showName: function () {
        console.log(thia.name);
    }
};

function deepCopy(parentObj, childObj) {
    childObj = childObj || {};
    for (var i in parentObj) {
        if (typeof  parentObj[i] === 'object') {
            /*
            * 如果要拷贝的对象属性是引用类型，我们需要使用深拷贝
            * 而且数组和对象的处理办法各不同
            * */
            if (parentObj[i].constructor === Array) {
                childObj[i] = [];
            } else {
                childObj[i] = {};
            }
            // 递归复制
            deepCopy(parentObj[i], childObj[i]);
        } else {
            // 如果不是引用类型，直接复制就行
            childObj[i] = parentObj[i];
        }
    }

    return childObj;
}

var result = {
    name: 'result'
};

result = deepCopy(father, result);
console.log(result);
/*
* { name: 'phoebus',
  age: 24,
  friend: [ '书', '音乐', '大自然' ],
  showName: [Function: showName] }
* */


/*
* 深拷贝：JSON解析实现
*
* */

var test ={
    name:{
        xing:{
            first:'张',
            second:'李'
        },
        ming:'老头'
    },
    age :40,
    friend :['隔壁老王','宋经纪','同事']
};

var test2 = JSON.parse(JSON.stringify(test));
// test2.age = 30;
// test2.name.xing.first = '恒';
// test2.friend.push('acs');

console.log(test2);
/*
*  { name: { xing: { first: '张', second: '李' }, ming: '老头' },
  age: 40,
  friend: [ '隔壁老王', '宋经纪', '同事' ] }
* */
console.log(test === test2);    // false

/*
* 深拷贝：结合递归循环和JSON解析
* */

var deepCopyObj = function (obj) {
    // 首先，拷贝的对象必须是对象，否则直接返回改值
    if (typeof obj !== 'object') {
        return obj;
    }

    var newObj = obj.constructor === Array ? [] : {};   // 根据数组还是对象进行不同的声明

    // 如果可以使用JSON解析优先使用
    if (window.JSON) {
        /*
        * JSON.stringify() 先将对象序列化成字符串
        * 然后通过 JSON.parse() 方法将字符串转为引用类型，这样就会创建一个新的对象返回
        * */
        newObj = JSON.parse(JSON.stringify(obj));
    } else {
        for (var i in obj) {
            newObj[i] = typeof  obj[i] === 'object' ? deepCopyObj(obj[i]) : obj[i];
        }
    }

    return newObj;
};



/*
* 最后还有JQ的深拷贝方法：jQuery.extend([deep], target, object1, [objectN])；
* */
