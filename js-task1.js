var box = document.getElementsByClassName("magicbox");
console.log(box);
//点击按钮开始闪修改magicbox样式
function randomRgbColor() { //随机生成RGB颜色
	var rgb='rgb('+Math.floor(Math.random()*255) + ","
	+Math.floor(Math.random()*255) + ","
	+Math.floor(Math.random()*255) +')';
	console.log(rgb);
	return rgb;
}
function randomNumber() {
	for (var n = 0;n < box.length; n++) {
		box[n].style.backgroundColor = "#fbb17f";
	}
	//添加新数组
	var i = 0;
	var vage = [];
	while (i < box.length) {
		vage.push(i);
		i++;
	}
	//对数组重新排序
	vage.sort(function(){ return 0.5 - Math.random(); }); 
	for (var zero=0;zero<box.length;zero++){ 
		console.log(vage[zero]); 
		console.log(vage);
	}
	box[vage[1]].style.backgroundColor = randomRgbColor();
	box[vage[2]].style.backgroundColor = randomRgbColor();
	box[vage[3]].style.backgroundColor = randomRgbColor();
}
//定时器
//参考链接https://blog.csdn.net/YDesire/article/details/81124331
var timer = null;
function start() {
	if (timer = null) {
		clearInterval(timer);
		timer = null;
	}
	timer = setInterval("randomNumber()",1000);
}
function end() {
	clearInterval(timer);
	timer = null;
	for (var n = 0;n < box.length; n++) {
			box[n].style.backgroundColor = "#fbb17f";
	}
}
