### 1. tab键用（必须）四个空格代替
　　因为在不同系统的编辑工具对tab解析不一样，windows下的tab键是占四个空格的位置，而在linux下会变成占八个空格的位置（除非你自己设定了tab键所占的位置长度）。

### 2. 每个样式属性后（必须）加 ";" 方便压缩工具"断句"。

### 3. Class命名中（禁止）出现大写字母，（必须）采用” - “对class中的字母分隔，如：

 ```css
 /* 正确的写法 */
 .hotel-title {
     font-weight: bold;
 }

 /* 不推荐的写法 */
 .hotelTitle {
     font-weight: bold;
 }
```
用"-"隔开比使用驼峰是更加清晰。
产品线-产品-模块-子模块，命名的时候也可以使用这种方式（@Artwl）
### 4. 空格的使用，以下规则（必须）执行：

```css
 .hotel-content {
     font-weight: bold;
 }
```
选择器与 { 之前（必须）要有空格
属性名的 : 后（必须）要有空格
属性名的 : 前（禁止）加空格
一个原因是美观，其次IE 6存在一个bug， 戳bug

### 5.多选择器规则之间（必须）换行

当样式针对多个选择器时每个选择器占一行

```css
 /* 推荐的写法 */
 a.btn,
 input.btn,
 input[type="button"] {
     ......
 }
```
### 6. （禁止）将样式写为单行, 如

```css
.hotel-content {margin: 10px; }
```
单行显示不好注释，不好备注，这应该是压缩工具的活儿~

### 7. （禁止）向 0 后添加单位, 如：

```css
.obj {
    left: 0px;
}
```
只是为了统一。记住，绿色字表强调，不表强制！

### 8. （禁止）使用css原生import

使用css原生import有很多弊端，比如会增加请求数等....

### 9. （推荐）属性的书写顺序, 举个例子:
```css
.hotel-content {
    /* 定位 */
    display: block;
    position: absolute;
    left: 0;
    top: 0;
    /* 盒模型 */
    width: 50px;
    height: 50px;
    margin: 10px;
    border: 1px solid black;
    / *其他* /
    color: #efefef;
 }
 ```

定位相关, 常见的有：display position left top float 等
盒模型相关, 常见的有：width height margin padding border 等

按照这样的顺序书写可见提升浏览器渲染dom的性能

简单举个例子，网页中的图片，如果没有设置width和height，在图片载入之前，他所占的空间为0，但是当他加载完毕之后，那块为0的空间突然被撑开了，这样会导致，他下面的元素重新排列和渲染，造成重绘（repaint）和回流（reflow）。我们在写css的时候，把元素的定位放在前头，首先让浏览器知道该元素是在文本流内还是外，具体在页面的哪个部位，接着让浏览器知道他们的宽度和高度，border等这些占用空间的属性，其他的属性都是在这个固定的区域内渲染的，差不多就是这个意思吧~(@frec)

### 10. 小图片（必须）sprite 合并

推荐文章：NodeJs智能合并CSS精灵图工具iSpriter

### 11. （推荐）当编写针对特定html结构的样式时，使用元素名 + 类名

```css
/* 所有的nav都是针对ul编写的 */
 ul.nav {
     ......
 }
```
".a div"和".a div.b"，为什么后者好？如果需求有所变化，在".a"下有多加了一个div，试问，开始的样式是不是会影响后来的div啊~

### 12. （推荐）IE Hack List

```css
 /* 针对ie的hack */
 selector {
     property: value;     /* 所有浏览器 */
     property: value\9;   /* 所有IE浏览器 */
     property: value\0;   /* IE8 */
     +property: value;    /* IE7 */
     _property: value;    /* IE6 */
     *property: value;    /* IE6-7 */
 }
```
当使用hack的时候想想能不能用更好的样式代替

### 13. （不推荐）ie使用filter,（ 禁止）使用expression

这里主要是效率问题，应该当格外注意，咱们要少用烧CPU的东西~

### 14. （禁止）使用行内（inline）样式

```html
<p style="font-size: 12px; color: #FFFFFF">example</p>
```
像这样的行内样式，最好用一个class代替。又如要隐藏某个元素，可以给他加一个class
```css
.hide {
    display: none;
}
```
尽量做到样式和结构分离~

### 15. （推荐）reset.css样式

推荐网站：http://www.cssreset.com/

### 16.（禁止）使用"*"来选择元素
```css
/*别这样写*/
* {
    margin: 0;
    padding: 0;
}
```
这样写是没有必要的，一些元素在浏览器中默认有margin或padding值，但是只是部分元素，没有必要将所有元素的margin、padding值都置为0。

### 17. 链接的样式，（务必）按照这个顺序来书写

```css
a:link -> a:visited -> a:hover -> a:active
```

#### 样式属性顺序

单个样式规则下的属性在书写时，应按功能进行分组，组之间需要有一个空行。
同时要以Positioning Model > Box Model > Typographic > Visual 的顺序书写，提高代码的可读性。

Positioning Model 布局方式、位置，相关属性包括：position, top, z-index, display, float等
Box Model 盒模型，相关属性包括：width, height, padding, margin，border,overflow
Typographic 文本排版，相关属性包括：font, line-height, text-align
Visual 视觉外观，相关属性包括：color, background, list-style, transform, animation
CSS选择器命名规则

#### 分类式命名法(在前端组件化下尤为重要)

布局（grid）（.g-）：将页面分割为几个大块，通常有头部、主体、主栏、侧栏、尾部等

模块（module）（.m-）：通常是一个语义化的可以重复使用的较大的整体，比如导航、登录、注册等

元件（unit）（.u-）：通常是一个不可再分的较为小巧的个体，通常被重复用于各种模块中，比如按钮、输 入框、loading等

功能（function）（.f-）：为方便一些常用样式的使用，我们将这些使用率较高的样式剥离出来，按需使用，通常这些选择器具有固定样式表现，比如清除浮动等，不可滥用

状态（.z-）：为状态类样式加入前缀，统一标识，方便识别，她只能组合使用或作为后代出现（.u-ipt.z-dis{}，.m-list li.z-sel{}）

javascript(.j-)：.j-将被专用于JS获取节点，请勿使用.j-定义样式
不要使用 " _ " 下划线来命名css
能良好的区分javascript变量名
输入的时候少按一个shift键
浏览器兼容性问题（比如使用_tips的选择器命名，在IE6是无效的）
id采用驼峰式命名(不要乱用id)
scss中的变量、函数、混合、placeholder采用驼峰式命名
#### 相同语义的不同类命名方法：
直接加数字或字母区分即可（如：.m-list、.m-list2、.m-list3等，都是列表模块，但是是完全不一样的模块）。其他举例：.f-fw0、.f-fw1、.s-fc0、.s-fc1、.m-logo2、.m-logo3、u-btn、u-btn2等等。
命名方式(BEM)：类-体（例：g-head）、类-体-修饰符（例：u-btn-active）
后代选择器：体-修饰符即可（例：.m-page .cut{}）注：后代选择器不要在页面布局中使用，因为污染的可能性较大；
最佳写法
```css
    /* 这是某个模块 */
    .m-nav{}/* 模块容器 */
    .m-nav li,.m-nav a{}/* 先共性  优化组合 */
    .m-nav li{}/* 后个性  语义化标签选择器 */
    .m-nav a{}/* 后个性中的共性 按结构顺序 */
    .m-nav a.a1{}/* 后个性中的个性 */
    .m-nav a.a2{}/* 后个性中的个性 */
    .m-nav .z-crt a{}/* 交互状态变化 */
    .m-nav .z-crt a.a1{}
    .m-nav .z-crt a.a2{}
    .m-nav .btn{}/* 典型后代选择器 */
    .m-nav .btn-1{}/* 典型后代选择器扩展 */
    .m-nav .btn-dis{}/* 典型后代选择器扩展（状态） */
    .m-nav .btn.z-dis{}/* 作用同上，请二选一（如果可以不兼容IE6时使用） */
    .m-nav .m-sch{}/* 控制内部其他模块位置 */
    .m-nav .u-sel{}/* 控制内部其他元件位置 */
    .m-nav-1{}/* 模块扩展 */
    .m-nav-1 li{}
    .m-nav-dis{}/* 模块扩展（状态） */
    .m-nav.z-dis{}/* 作用同上，请二选一（如果可以不兼容IE6时使用） */
```


----
