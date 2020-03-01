## 1. HTML基础规范—整体结构
1.1 文件应以<!doctype html>首行定格开始，这句话告诉浏览器这是一个什么文件，我们推荐使用<!doctype html>。

1.2 必须在head元素内部的meta标签内声明文档的字符编码charset, 如：<meta charset="UTF-8">，这句代码告诉浏览器应该此HTML文件使用的字符集是什么，如果不加此行代码，那么在浏览器中可能显示为乱码。

1.3 页面的title是极为重要的不可缺少的一项。 

```html
<!doctype html>
<html>
<head>
<meta charset="utf-8">
<title>Example</title>
</head>
<body>

</body>
</html>
```

1.4 结构顺序和视觉顺序基本保持一致

• 按照从上至下、从左到右的视觉顺序书写HTML结构。

• 有时候为了便于索取引擎抓取，我也会将重要内容在HTML结构顺序上提前，因为搜索引擎抓取网页内容是自上而下的，所以将重要的内容在HTML结构顺序上提前可便于抓取重要内容。

• 用div代替table布局，可以使HTML更具有灵活性，也方便利用css控制。

• table不建议用于布局，但表现具有明显表格形式的数据，table还是首选项。

1.5 结构、表现、行为三者分类,避免内联。

• 使用link将css文件引入，并置于head中。注意：一般我们不适用@import来引入外部css文件。

• 使用script将js文件引入，并置于body底部，js文件最后加载，HTML会最先加载，用户体验会更好。注意：并不是所有的js文件都要放置与body底部，如果我们需要使用js文件动态修改meta元素内容时，需要将js文件引入head标签中。

1.6保持良好的树形结构

• 每一个块级元素都另起一行，每一行都使用tab缩进对齐。如果不是块级元素，比如几个行内元素，我们把它写在一行即可。注意：html、head、body以及body下的几个第一级标签(即直接子元素)不缩进，其他的都正常缩进。

```html
<!doctype html>
<html>
<head>
<meta charset="utf-8">
<title>Example</title>
</head>
<body>
  <h1>缩进问题</h1>
  <div>我是块级元素</div>
  <div>
    <div>
      <p>我是段落标签</p>
    </div>
  </div>
</body>
</html>
```

1.7 其他问题

结构上如果可以并列书写，就不要嵌套。
例如：如果可以写成<div></div><div></div>那么就不要写成<div><div></div></div>

如果结构已经可以满足视觉和语义的要求，那么就不要有额外的冗余的结构。
例如：比如<div><h2></h2></div>已经能满足要求，那么就不要再写成<div><div><h2></h2></div></div>

一个标签上应用的类名不要过多，越少越好。
例如：<div class="class1 class2 class3 class4"></div>

对于一个语义化的内部标签，应该尽量避免使用类名。
例如：li标签中的itm应去除：<ul class="m-help"><li class="itm"></li><li class="itm"></li></ul>

1.8 Renderer

```html
<meta http-equiv="X-UA-Compatible" content="edge,chrome=1" />
```
或者
```html
<meta http-equiv="X-UA-Compatible" content="edge" />
```
chrome=1值，目的是触发Google Chrome Frame，不过现在Google已经抛弃Google Chrome Frame了，因此也不用这样写了。
```html
<meta name="renderer" content="webkit|ie-comp|ie-stand">
```
content的取值为webkit,ie-comp,ie-stand之一，区分大小写，分别代表用webkit内核，IE兼容内核，IE标准内核。 若页面需默认用极速核，增加标签：<meta name=”renderer” content=”webkit” /> 若页面需默认用ie兼容内核，增加标签：<meta name=”renderer” content=”ie-comp” /> 若页面需默认用ie标准内核，增加标签：<meta name=”renderer” content=”ie-stand” /> 
这里发现一个问题，官方给的信息里结尾是“>”，实际测试时不起作用，这时只要把结尾改为“ />”（注意 / 前面有空格）。 

## 2. HTML基础规范—代码格式
2.1 说明文案的注释方法

开始注释：<!--注释文案-->
结束注释：<!--/注释文案-->
允许只有开始注释。

```html
<div class="public-header">
  <div class="public-container clearfloat">
    <div class="header-logo"><a href="javascript:;"></a></div><!-- a也可以，但是，同一级：要么内联要么块级 -->
    <ul class="header-nav clearfloat">
      <li class="item"><a href="javascript:;">Our Story</a></li><!--不建议直接给li进行命名-->
      <li class="item"><a href="javascript:;">Menu</a></li>
      <li class="item"><a href="javascript:;">Reservations</a></li>
      <li class="item"><a href="javascript:;">News</a></li>
      <li class="item"><a href="javascript:;">Reviews</a></li>
    </ul>
  </div><!-- 没有高度的，所以要加浮动 -->
</div><!-- 1. 公共头 -->
```

2.2 严格嵌套

（1）应当以最严格的XHTML script标准来嵌套，不如内联元素不能包含块级元素等。

（2）正确闭合标签且必须闭合。

2.3 严格的属性

（1）属性和值全部小写，每个属性都必须有一个值,每个值必须加双引号。

（2）没有值的属性必须使用自己的名称作为值（checked、disabled、readonly、selected等等）。

（3）可以省略style标签和script标签的type属性。

## 3. HTML基础规范—HTML内容语义
1.加强资源型内容的可访问型和可用性。

比如在img标签内加入alt属性，在audio内加入文案和链接等等。

2.加强不可见内容的可访性

比如背景图片的文字应该同时卸载HTML中，并使用css使其不可见，有利于搜索引擎抓取你的内容，也可在css失效的情况下看到内容。

3.适当使用实体字符（以实体代替与HTML语法相同的字符，避免浏览器解析错误）

## 4. HTML基础规范—正确闭合HTML标签
自闭和标签和闭合标签应该按照要求书写。标签不要交叉嵌套。

如下的这几种写法不符合规范，应该严格禁止：

```html
<!-- 错误：非自闭合标签没有结束标签 --><a href="demo.html" title="demo">simple

<!-- 错误：非自闭合标签使用自闭合标签的语法 --><a href="demo.html" title="demo" />

<!-- 错误：自闭合标签使用非自闭合标签的语法 --><img src="demo.png" alt="demo"></img>
```

当元素的起始标签和结束标签不在同一个元素的内容中时，则会出现交叉嵌套。应该严格禁止标签之间的交叉嵌套。
下面的例子中起始标签“<span>”在元素div的内容中，而结束标签“</span>”则在div元素的内容之外：

```html
<!-- 错误： 起始标签“<span>”在元素div的内容中，结束标签“</span>”则在div元素的内容之外 --><div>foo
```

一般通过编写层次缩进良好的HTML代码能够最大化避免出现这样交叉嵌套的错误代码。

## 5. HTML基础规范—停止使用不标准的标签和属性
标签没有实际的语义，仅仅是用于设置样式

不推荐使用单纯设置样式的标签，如：basefont、big、center、font等。应该通过CSS设置样式，让HTML标签功能更单一。不推荐的示例如下：

```html
<!--不推荐代码：不推荐使用单纯设置样式的标签，应该通过CSS设置样式--><font color=blue>don't use it!</font><big>don't use it!</big><center>don't use it!</center>
```

不推荐在HTML标签中添加样式属性，如：iframe、img、input、div等标签中的align属性，body标签上的background属性，td和tr标签上的height、width、nowrap、bgcolor、valign等属性，iframe标签中的frameborder、marginheight、scrolling等属性。此类属性应该废弃，并通过添加CSS样式来实现相同的效果。不推荐的示例如下：

```html
<!—不推荐代码：标签中添加border、width、height等样式属性--><img src=”#” alt=”demo” border=”1” width="194" height="37" /><div id="focusViwer" align=center> </div>
```

不推荐使用 <blink> 或<marquee> (闪动,滚动)。这两个标签的职能已经超出了HTML本身，并且也存在浏览器的兼容问题。以如今的审美来说，这两个标签实现的效果丑陋无比，如果一定要这样的效果，可以通过JavaScript代码来实现，并且效果会更好，如：可以使用jQuery Marquee插件

```html
<!--不推荐代码：效果丑陋，并且存在浏览器兼容问题，不推荐使用，如果需要实现这样的效果，可以通过JavaScript代码来实现，并且效果会更好--><blink>don't use it!</blink><marquee scrollamount=3 scrolldelay=100 >don't use it</marquee>
```

## 6. HTML基础规范—其他
1.书写链接地址时, 必须避免重定向，例如：href=”http://itaolun.com/”, 即须在URL地址后面加上“/”；
2.引入JS库文件, 文件名须包含库名称及版本号及是否为压缩版, 比如jquery-1.4.1.min.js; 引入插件, 文件名格式为库名称+插件名称, 比如jQuery.cookie.js;
3.能以背景形式呈现的图片，尽量写入css样式中;
4.书写过程中，考虑向后扩展性。
