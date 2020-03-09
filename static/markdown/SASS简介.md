### 预处理
css本身是很有用的，但样式表正在变得越来越庞大、复杂以至于难以维护。预处理可以解决这个问题。sass可以让你使用一些css本身没有的东西，比如变量、嵌套、混合、继承和一些其他特别的特性，让使用css变得更加得心应手。

### 变量
试想一下在样式表中可以重复使用变量。你可以在样式表中用变量存储一些例如：颜色、字体栈、或者其他css值，然后重复使用他们。sass用$符号来设置一个变量，例子如下：

```scss
$font-stack: Helvetica, sans-serif;
$primary-color: #333;

body {
  font: 100% $font-stack;
  color: $primary-color;
}
```
当运行sass之后，sass会把我们定义的变量放置到css样式表的指定地方。这个是非常强大的，当我们希望我们定义的颜色在整个网站保持一致性的时候。

### 嵌套
当你写html的时候，你会发现它有清晰的嵌套和视觉的层次。而css则没有。sass会让你嵌套你的css选择器就像是用html嵌套的视觉层次一样。请注意，过多的嵌套规则将会有过多的css，从而导致代码难以维护，这通常是一个不好的做法。
考虑到这一点，这里有个关于一些经典样式的网站导航案例：

```scss
nav {
  ul {
    margin: 0;
    padding: 0;
    list-style: none;
  }

  li { display: inline-block; }

  a {
    display: block;
    padding: 6px 12px;
    text-decoration: none;
  }
}
```
你会发现css的ul、li、a选择器嵌套在了nav选择器里面。这样组织你的css代码会变得更加可读，而编译后生成的css代码如下：

```css
nav ul {
  margin: 0;
  padding: 0;
  list-style: none;
}

nav li {
  display: inline-block;
}

nav a {
  display: block;
  padding: 6px 12px;
  text-decoration: none;
}
```
### 局部
你可以创建一个包含css小片段的sass文件，然后再其他sass文件中引入这个sass文件。这会让你模块化你的css代码而且会让代码越来越容易维护。片段sass文件通常以下划线开头命名，如命名为：_partial.scss。这样的命名方式会让sass知道它是一个片段sass文件，不会编译后生成一个css文件。引入这样的sass片段文件可以用指令@import。

### Import
css有个引入选项，可以把你的css代码分割成更小、更容易维护的部分。唯一的缺点就是每次你引入一个文件，就需要一次http请求。而sass文件顶端的@import引入文件不需要再一次的http请求。sass将会把在sass文件中需要引入的文件和本文件整合在一起，然后只会发送一个整合后的css文件到服务器，这样就会减少http的请求次数。

现在，我们有两个sass文件， _reset.scss 和 base.scss。我们将在base.scss文件中引入_reset.scss文件。

```scss
// _reset.scss

html,
body,
ul,
ol {
   margin: 0;
  padding: 0;
}
// base.scss

@import 'reset';

body {
  font: 100% Helvetica, sans-serif;
  background-color: #efefef;
}
```
注意，在base.scss中我们用了@import 'reset';来引入文件。sass是很聪明的，它会自动知道这个是sass文件，从而就不需要给引入的文件加scss文件后缀了，编译后的css文件如下：

```css
html, body, ul, ol {
  margin: 0;
  padding: 0;
}

body {
  font: 100% Helvetica, sans-serif;
  background-color: #efefef;
}
```
### 混合器
css中的一些写法写起来是有点乏味的，尤其是css3中存在的一些前缀。混合器mixin能让你创建一个css申明组，可以在整个网站中重复使用。你甚至可以传递参数让你的混合器更加灵活。混合器最好的一个应用就是添加浏览器的前缀，如下面border-radius例子：

```scss
@mixin border-radius($radius) {
  -webkit-border-radius: $radius;
     -moz-border-radius: $radius;
      -ms-border-radius: $radius;
          border-radius: $radius;
}

.box { @include border-radius(10px); }
```
创建一个混合器，首先要通过@mixin ，然后给他一个名字，如：border-radius。也可以传递参数$radius，像这样border-radius($radius),创建mixin完成后，就可以使用@include加混合器名字来使用混合器。编译后的css代码如下：

```css
.box {
    -webkit-border-radius: 10px;
       -moz-border-radius: 10px;
        -ms-border-radius: 10px;
            border-radius: 10px;
}
```
### 继承
继承是sass中最实用的特性之一。使用@extend指令可以让我们从一个选择器到另一个选择器来共享一段css属性。它可以让你的sass文件变得非常的干练。下面的例子我们将会创建一系类的信息关于错误的、警告的和成功的。

```scss
.message {
  border: 1px solid #ccc;
  padding: 10px;
  color: #333;
}

.success {
  @extend .message;
  border-color: green;
}

.error {
  @extend .message;
  border-color: red;
}

.warning {
  @extend .message;
  border-color: yellow;
}
```
上面的例子中，你可以修改.message 属性，修改的效果最终会应用到.success、.error、.warning中。
生成的css代码神奇的发生了改变，它避免了你要写多个类来达到同样的效果。编译后的css代码：

```css
.message, .success, .error, .warning {
  border: 1px solid #cccccc;
  padding: 10px;
  color: #333;
}

.success {
  border-color: green;
}

.error {
  border-color: red;
}

.warning {
  border-color: yellow;
}
```
### 运算符
在css中做数学运算是很有用的，sass有少许标准的数学运算符，如+、-、*、/、和 %。下面的例子我们将做一些简单的数学运算来计算aside和article的宽度。

```scss
.container { width: 100%; }

article[role="main"] {
  float: left;
  width: 600px / 960px * 100%;
}

aside[role="complimentary"] {
  float: right;
  width: 300px / 960px * 100%;
}
```
我们创建了一个简单的基于960px的流式网格，sass中的运算符可以毫无障碍的把像素值转换为百分比。编译后的css代码如下：

```css
.container {
  width: 100%;
}

article[role="main"] {
  float: left;
  width: 62.5%;
}

aside[role="complimentary"] {
  float: right;
  width: 31.25%;
}
```
