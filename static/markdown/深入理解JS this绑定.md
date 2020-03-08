**js 的 this 绑定问题，让多数新手懵逼，部分老手觉得恶心,这是因为this的绑定 ‘难以捉摸’，出错的时候还往往不知道为什么，相当反逻辑。
让我们考虑下面代码:**

```js
var people = {
    name : "海洋饼干",
    getName : function(){
        console.log(this.name);
    }
};
window.onload = function(){
    xxx.onclick =  people.getName;
};
```
在平时搬砖时比较常见的this绑定问题，大家可能也写给或者遇到过，当xxx.onclick触发时，输出什么呢 ？

为了方便测试，我将代码简化:

```js
var people = {
    Name: "海洋饼干",
    getName : function(){
        console.log(this.Name);
    }
};
var bar = people.getName;

bar();    // undefined
```
通过这个小例子带大家感受一下this恶心的地方，我最开始遇到这个问题的时候也是一脸懵逼，因为代码里的this在创建时指向非常明显啊，指向自己 people 对象，但是实际上指向 window 对象，这就是我马上要和大家说的 this 绑定规则。

### this
什么是this ？在讨论this绑定前，我们得先搞清楚this代表什么。

this是JavaScript的关键字之一。它是 对象 自动生成的一个内部对象，只能在 对象 内部使用。随着函数使用场合的不同，this的值会发生变化。
this指向什么，完全取决于 什么地方以什么方式调用，而不是 创建时。（比较多人误解的地方）（它非常语义化，this在英文中的含义就是 这，这个 ，但这其实起到了一定的误导作用，因为this并不是一成不变的，并不一定一直指向当前 这个）
#### this 绑定规则
掌握了下面介绍的4种绑定的规则，那么你只要看到函数调用就可以判断 this 的指向了。

#### 默认绑定
考虑下面代码:

```js
function foo(){
    var a = 1 ;
    console.log(this.a);    // 10
}
var a = 10;
foo();
```
这种就是典型的默认绑定，我们看看foo调用的位置，”光杆司令“，像 这种直接使用而不带任何修饰的函数调用 ，就 默认且只能 应用 默认绑定。

那默认绑定到哪呢，一般是window上，严格模式下 是undefined。

#### 隐性绑定
代码说话:

```js
function foo(){
    console.log(this.a);
}
var obj = {
    a : 10,
    foo : foo
}
foo();                // ?

obj.foo();            // ?
```
答案 : undefined 10

foo()的这个写法熟悉吗，就是我们刚刚写的默认绑定,等价于打印window.a,故输出undefined ,
下面obj.foo()这种大家应该经常写，这其实就是我们马上要讨论的 隐性绑定 。

函数foo执行的时候有了上下文对象，即 obj。这种情况下，函数里的this默认绑定为上下文对象，等价于打印obj.a,故输出10 。

如果是链性的关系，比如 xx.yy.obj.foo();, 上下文取函数的直接上级，即紧挨着的那个，或者说对象链的最后一个。

### 显性绑定
#### 隐性绑定的限制
在我们刚刚的 隐性绑定中有一个致命的限制，就是上下文必须包含我们的函数 ，例：
```js
var obj = { foo : foo }
```
如果上下文不包含我们的函数用隐性绑定明显是要出错的，不可能每个对象都要加这个函数 ,那样的话扩展,维护性太差了，我们接下来聊的就是直接 给函数强制性绑定this。

#### call apply bind
这里我们就要用到 js 给我们提供的函数 call 和 apply，它们的作用都是改变函数的this指向，第一个参数都是 设置this对象。

两个函数的区别：

call从第二个参数开始所有的参数都是 原函数的参数。
apply只接受两个参数，且第二个参数必须是数组，这个数组代表原函数的参数列表。
例如：

```js
function foo(a,b){
    console.log(a+b);
}
foo.call(null,'海洋','饼干');        // 海洋饼干  这里this指向不重要就写null了
foo.apply(null, ['海洋','饼干'] );     // 海洋饼干
```
除了 call，apply函数以外，还有一个改变this的函数 bind ，它和call,apply都不同。

bind只有一个函数，且不会立刻执行，只是将一个值绑定到函数的this上,并将绑定好的函数返回。例:

```js
function foo(){
    console.log(this.a);
}
var obj = { a : 10 };

foo = foo.bind(obj);
foo();                    // 10
```

#### 显性绑定
开始正题，上代码，就用上面隐性绑定的例子 :

```js
function foo(){
    console.log(this.a);
}
var obj = {
    a : 10            //去掉里面的foo
}
foo.call(obj);        // 10
```
我们将隐性绑定例子中的 上下文对象 里的函数去掉了，显然现在不能用 上下文.函数 这种形式来调用函数，大家看代码里的显性绑定代码foo.call(obj)，看起来很怪，和我们之前所了解的函数调用不一样。

其实call 是 foo 上的一个函数,在改变this指向的同时执行这个函数。
