/**
 * @Description: 简单实现对象拷贝
 * @author Phoebus
 * @date 2019-8-7
*/

/*
* 简单循环实现对象拷贝
* */

// 创建父类对象
var father = {
    name: 'phoebus',
    age: 24,
    friend: ['书', '音乐', '大自然'],
    showName: function () {
        console.log(thia.name);
    }
};

// 创建子类
var child = {};

// 开始循环深拷贝
for (var i in father) {
    child[i] = father[i];
}

console.log(father);
console.log(child);
console.log(father === child);  // false

/*
* 这里虽然说是拷贝，但其实只是浅拷贝，因为如果父类对象存在引用对象，这样拷贝还是只是复制了引用，如果真正的深拷贝，还需要对引用类型做处理
* */
