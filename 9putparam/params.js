/**
 * 定义
在《JavaScript高级程序设计》第三版 4.1.3，讲到传递参数：
ECMAScript中所有函数的参数都是按值传递的。
什么是按值传递呢？
也就是说，把函数外部的值复制给函数内部的参数，就和把值从一个变量复制到另一个变量一样。
 */

// 按值传递
/**
 * 很好理解，当传递 value 到函数 foo 中，
 * 相当于拷贝了一份 value，假设拷贝的这份叫 _value，函数中修改的都是 _value 的值，而不会影响原来的 value 值。
 */
console.log('按值传递');
var value = 1;
function foo(v) {
    v = 2;
    console.log(v); //2
}

foo(value);
console.log(value); //1

//引用传递
/**
 * 拷贝虽然很好理解，但是当值是一个复杂的数据结构的时候，拷贝就会产生性能上的问题。
所以还有另一种传递方式叫做按引用传递。
所谓按引用传递，就是传递对象的引用，函数内部对参数的任何改变都会影响该对象的值，因为两者引用的是同一个对象。
 */
console.log('引用传递');
var obj = {
    value1: 1
}

function foo1(o) {
    o.value1 = 2;
    console.log(o.value1); //2
}
foo1(obj);
console.log(obj.value1); //2

//第三种传递方式
/**
 * 这就要讲到其实还有第三种传递方式，叫按共享传递。
而共享传递是指，在传递对象的时候，传递对象的引用的副本。
注意： 按引用传递是传递对象的引用，而按共享传递是传递对象的引用的副本！
所以修改 o.value，可以通过引用找到原值，但是直接修改 o，并不会修改原值。所以第二个和第三个例子其实都是按共享传递。
最后，你可以这样理解：
参数如果是基本类型是按值传递，如果是引用类型按共享传递。
但是因为拷贝副本也是一种值的拷贝，所以在高程中也直接认为是按值传递了。
所以，高程，谁叫你是红宝书嘞！
 */
console.log('第三种传递方式');
var obj3 = {
    value3: 3
}

function foo3(o3) {
    o3 = 33;
    console.log(o3); // 33
}
foo3(obj3);
console.log(obj3.value3); //3
