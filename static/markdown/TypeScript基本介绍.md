# TypeScript
### TypeScript介绍

背景介绍


TypeScript简称ts<br />
TypeScript是ES6的实现,ts语言是按照ES6的标准设计的
TypeScript是微软公司联合谷歌公司推出的一门基于javascript的一门新语言,目前主要应用于Angular2以上版本的的开发中
#### 什么是TypeScript?<br>
TypeScript是JavaScript的一个超集,对JavaScript中的变量加入的类型的支持和限制<br>
TypeScript可以编译出纯净,简洁的Javascript代码,并且可以运行在任何浏览器上、Node.js环境中和任何支持ECMAScript 3（或更高版本）的JavaScript引擎中<br>
TypeScript本身并不能直接运行在浏览器上,需要编译成JavaScript进行运行(可以认为TypeScritp只存在于开发阶段,生产阶段依然使用的是我们熟悉的JavaScript,使用TypeScript中的好处可以提高开发效率,解决javascript弱类型带来的一些问题)
TypeScript的文件后缀名为.ts
#### 运行环境
TypeScript编译器基于nodejs环境,所以必须先安装nodejs环境<br>
TypeScript编译器安装<br>
```
npm install typescript -g
```
因为TypeScript编译器为一个工具包,所以采用全局安装<br>

#### TypeScript中数据类型介绍
定义布尔类型<br>
```js
//ts声明布尔类型的变量
let flag:boolean=true;
```

ts中定义数值类型
```js
let count:number=100
```

ts中定义字符类型
```js
let str:string='hello world'
```

ts中定义undefined类型
```js
let a:undefined=undefined
```
ts中定义null
```js
let b:null=null
```

ts中定义any(任意类型:变量值可以为任意类型)
```js
let anyData:any=''
```

ts定义void类型:一般用预定义函数返回值类型

```js
function print:void(params){
    console.log(params);
}
```
//声明一个void类型的变量没有什么大用，因为你只能为它赋予undefined和null：
```js
let unusable: void = undefined;
```
#### 定义数组

第一种:元素类型后面加一个[]
```js
// 定义一个组成元素为数字的数组
let arr1:number[]=[1,2,3,4]
```
```js
//定义一个字符数组
let arr2:string[]=['jack','robin','pony']
```
```js
// 定义一个对象数组
let arr3:object[]=[
    {name:'jack',age:1967},
    {name:'robin',age:1968},
    {name:'pony',birthday:1974}
]
```
第二种:使用数组泛型,Array<元素类型>
```js
//定义一个组成元素为字符的数组
let arr1:Array<string>=['jack','robin','pony']
```
```js
//定一个数字数组
let arr2:Array<number>=[1,2,3,4]
```
```js
//定义一个对象数组
let arr3:Array<object>=[
   {name:'jack',age:1967},
   {name:'robin',age:1968},
   {name:'pony',birthday:1974}
]
```
#### 对象的定义

方案1:
```js
// 在对象名后面使用一个{}来进行对象属性值类型的约束
let obj:{name:string,age:number,isMarry:boolean}={
    name:'zs',
    age:30,
    isMarry:false
}
```
方案2:
```js
// 使用接口定义属性值的类型
interface Person={
    name:string;
    age:number;
    isMarry:boolean;
}
```
```js
// 创建对象的时候引用该接口, 进行属性值类型的约束
let p1:Person={
    name:'zs',
    age:30,
    isMarry:false
}
```
### 函数
#### 函数的定义
加入了类型的约束,只要体现在参数和返回值上面
```js
function sum(a:number,b:number):string{
    return '求和结果为:'+(a+b);
}
```
### 类(class)
#### 类(class)的介绍
```js
// 类(class)相当于ES5中的构造函数

class Person{
    // 声明静态属性
    static version:string='V1.0.0';
    //声明成员属性; 并进行数据类型的约束
    name:string;
    age:number;
    sex:string;
    //构造函数,做一些初始化的事,比如给成员属性赋值
    constructor(props){
        //成员属性赋值
        this.name=props.name;
        this.age=props.age;
        this.sex=props.sex;
    }
    //声明成员方法1
    sayName(){
        console.log('My name is '+this.name);
    }
    //声明成员方法2
    dance(){
        console.log('我会跳新疆舞');
    }
    // 静态成员方法
    static sayHi():string{
        console.log('hello world!!!');
        return 'hello world!!';
    }
}
//创建实例:和js中一样
let p1=new Person({name:'zs',age:10,sex:'男'})
```

#### 类的继承(extends)


```js
//通过extends语法结构继承Person类的属性和方法
class Student extends Person{
    //声明自己独有的成员属性; 并进行数据类型的约束
    addr:string;
    constructor(props){
        //必须在此处使用super()先调用父类的构造函数
        super(props);
        //属性赋值
        this.addr=props.addr
    }
    //添加自己独有的成员方法
    hobby(){
        console.log('爱生活,爱代码');
    }

}
//创建实例对象
let s1=new Student({name:'ls',age:10,sex:'女',addr:'中国西安'});
```
