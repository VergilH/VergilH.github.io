### 定时器

```js
setTimeout(function(num){
  alert(num);
},1000,123);
```
定时器不只有两个值，123是前面函数的回调参数

### 拼接字符串
```js
 document.body.innerHTML =
    '<div>div</div>\
    <span>span</span>\
    <p>p</p>\
    55555';
```
可以用“\”拼接字符串

### console.log()

```js
var a = 'hello';
console.log('%c'+a,'font-size:400%;background:blue;color:white;');
```
可以在console.log里加样式
### typeof
```js
var arr = [];
arr.num = 10;
// alert(typeof arr);
// alert(typeof(arr));
//instanceof
//in

// alert(arr instanceof Object);
// alert(arr instanceof(Object));

// alert('num' in arr);
alert('num' in (arr));
typeof arr 等同于 typeof（arr）；
```
### 嵌套for循环
```js
a:for(var i=0;i<5;i++){
    for(var j=0;j<1;j++){
        if(i==3){
            break a;
        }
        alert(i);
    }
}
```
跳出循环
### for（;;）

```js
var i=0;
for(;;){
    if(++i>=5){
      break;
    }
}
```
### Call

```js
var obj ={
  aaa:function(){
    alert(this);
  }
};
var arr = [1,2,3];
obj.aaa.call();
```
### insertBefore

```html
<input type="button" value="添加" id="input1">
<ul id="ul1"></ul>
```
```js
window.onload = function(){
      var oInput = document.getElementById('input1');
      var oUl = document.getElementById('ul1');
      var iNow = 0;
      var aLi = oUl.getElementsByTagName('li');

      oInput.onclick = function(){
          var oLi = document.createElement('li');
          oLi.innerHTML = iNow++;
          oUl.insertBefore(oLi,aLi[0]);
      };
};
```
oUl.appendchild()是在后面添加子节点，insertBefore是在前面添加
### 匿名函数自执行

```js
(function(){
    alert(123);
})();
~function(){
    alert(123);
}();
!function(){
    alert(123);
}();
+function(){
    alert(123);
}();
```
用括号把匿名函数括起来，或者在前面添加位运算符，匿名函数才能自执行，不报错

### 创建对象

```js
function Aaa(){}
var a1 = new Aaa;
alert(a1);
var arr = new Array;
alert(arr);
``
创建对象时可以省略（）
