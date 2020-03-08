#### 本文介绍箭头(arrow)函数的优点。
#### 更简洁的语法
我们先来按常规语法定义函数：
```js
function funcName(params) {
    return params + 2;
}
funcName(2);
// 4

//复制代码该函数使用箭头函数可以使用仅仅一行代码搞定！

var funcName = params => params + 2;
funcName(2);
// 4
```
复制代码是不是很酷！虽然是一个极端简洁的例子，但是很好的表述了箭头函数在写代码时的优势。我们来深入了解箭头函数的语法：
```js
parameters => {
    statements;
};

//复制代码如果没有参数，那么可以进一步简化：

() => {
    statements;
};
```
复制代码如果只有一个参数，可以省略括号:
```js
parameters => {
    statements;
};
//复制代码如果返回值仅仅只有一个表达式(expression), 还可以省略大括号：
parameters => expression

// 等价于:
function (parameters){
  return expression;
}
```
复制代码现在你已经学会了箭头函数的语法，我们来实战一下。打开 Chrome 浏览器开发者控制台，输入：
```js
var double = num => num * 2;
```
复制代码我们将变量double绑定到一个箭头函数，该函数有一个参数num, 返回 num * 2。 调用该函数：
```js
double(2);
// 4

double(3);
// 6
```

复制代码一行代码搞定 BUG 监控：Fundebug
没有局部this的绑定
和一般的函数不同，箭头函数不会绑定this。 或者说箭头函数不会改变this本来的绑定。
我们用一个例子来说明：
```js
function Counter() {
    this.num = 0;
}
var a = new Counter();
```
复制代码因为使用了关键字new构造，Count()函数中的this绑定到一个新的对象，并且赋值给a。通过console.log打印a.num，会输出 0。
```js
console.log(a.num);
// 0
```
复制代码如果我们想每过一秒将a.num的值加 1，该如何实现呢？可以使用setInterval()函数。
```js
function Counter() {
    this.num = 0;
    this.timer = setInterval(function add() {
        this.num++;
        console.log(this.num);
    }, 1000);
}
```
复制代码我们来看一下输出结果：
```js
var b = new Counter();
// NaN
// NaN
// NaN
// ...
```
复制代码你会发现，每隔一秒都会有一个NaN打印出来，而不是累加的数字。到底哪里错了呢？
首先使用如下语句停止setInterval函数的连续执行：
```js
clearInterval(b.timer);
```
复制代码我们来尝试理解为什么出错：首先函数setInterval没有被某个声明的对象调用，也没有使用new关键字，再之没有使用bind, call和apply。setInterval只是一个普通的函数。实际上setInterval里面的this绑定到全局对象的。我们可以通过将this打印出来验证这一点：
```js
function Counter() {
    this.num = 0;
    this.timer = setInterval(function add() {
        console.log(this);
    }, 1000);
}
var b = new Counter();
```
复制代码你会发现，整个window对象被打印出来。 使用如下命令停止打印：
```js
clearInterval(b.timer);
```
复制代码回到之前的函数，之所以打印NaN，是因为this.num绑定到window对象的num，而window.num未定义。
那么，我们如何解决这个问题呢？使用箭头函数！使用箭头函数就不会导致this被绑定到全局对象。
```js
function Counter() {
    this.num = 0;
    this.timer = setInterval(() => {
        this.num++;
        console.log(this.num);
    }, 1000);
}
var b = new Counter();
// 1
// 2
// 3
// ...
```
复制代码通过Counter构造函数绑定的this将会被保留。在setInterval函数中，this依然指向我们新创建的b对象。
为了验证刚刚的说法，我们可以将 Counter函数中的this绑定到that, 然后在setInterval中判断this和that是否相同。
```js
function Counter() {
    var that = this;
    this.timer = setInterval(() => {
        console.log(this === that);
    }, 1000);
}
var b = new Counter();
// true
// true
// ...
```
复制代码正如我们期望的，打印值每次都是true。最后，结束刷屏的打印：
```js
clearInterval(b.timer);
```
#### 总结
箭头函数写代码拥有更加简洁的语法;不会绑定this。

作者：Fundebug
链接：https://juejin.im/post/59327a58a0bb9f0058c8caae
来源：掘金
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。
