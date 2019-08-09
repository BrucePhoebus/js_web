/*
* 引用类型复制，合并另一个对象的内容
* 传入两个对象，将A对象的内容拷贝到B对象中，然后返回B对象
* */

function deepClone(oldObj, newObj) {
	// 如果传入的是普通类型，则直接返回
	if (typeof oldObj !== 'object') {
		return oldObj;
	}

	// 允许传入指定类型拷贝，例如对象、数组。。。默认为对象
	newObj = newObj || {};

	// 递归遍历对象，进行深拷贝
	for (let key in oldObj) {
		// 如果键是对象，并且类型不是null，进行递归深入
		if (typeof key === 'object' && typeof key !== 'null') {
			// 判断引用类型是对象还是数组，针对进行处理
			if (Array.isArray(oldObj[key])) {
				deepClone(oldObj[key], []);
			} else {
				deepClone(oldObj[key], {})
			}
		} else {
			// 如果键为普通类型，则直接复制
			newObj[key] = oldObj[key];
		}
	}
	return newObj;
}

let A = {
	name: 'ff',
	car: [1, 2, 3],
	son: {
		first: 'son1',
		second: 'son2'
	}
},
	B = {};
console.log(deepClone(A, B));
/*
* {
* 	car: (3) [1, 2, 3]
* 	name: "ff"
* 	son: {first: "son1", second: "son2"}
* }
* */

A = [1, 2, [1, 2, 3], {name: '33'}];
B = [];
console.log(deepClone(A, B));
/*
* [
* 	0: 1
* 	1: 2
* 	2: (3) [1, 2, 3]
* 	3: {name: "33"}
* ]
* */
