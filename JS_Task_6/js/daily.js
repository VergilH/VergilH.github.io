str = sessionStorage.playerNumber;
console.log(str);
playerNumber = JSON.parse(str);


deadPerson = sessionStorage.Arr;
var dead = JSON.parse(deadPerson);
console.log(dead.length);

var day = 1, index = 0;
//动态日期
$(document).ready(function(){
	for (var i = -1; i < dead.length; i=i+2) {
		$("main").append("<div class=date></div>");
		$("main").append("<div class=content><div class=sideline><div class=moon></div><div class=sun></div></div><div class=tips><div class=tip murder><div class=tip_arrow></div><p>杀手杀人</p></div><p class=deadInfo></p><div class=tip id=lastWord><div class=tip_arrow></div><p>亡灵发表遗言</p></div><div class=tip id=discuss><div class=tip_arrow></div><p>玩家依次发言</p></div><div class=tip id=vote><div class=tip_arrow></div><p>全民投票</p></div></div></div>")
		$(".content").addClass("non-display").removeClass("display");
		$(".content").last().addClass("display").removeClass("non-display");
		$(".date:eq("+ index +")").html("<p class=daily></p><div class=down_arrow></div>");
		$(".daily:eq("+ index +")").text("第"+NumberToChinese(day)+"天");
		day++;
		index++;
	}
	$(".down_arrow").click(function(){//查看之前天数状态
		window.arrow = $('.down_arrow').index(this);
		console.log(arrow);
		var s = $(".content:eq("+ arrow +")").hasClass("non-display");
		if (s) {
			$(".content:eq("+ arrow +")").addClass("display").removeClass("non-display");
		} 
		else {
			$(".content:eq("+ arrow +")").addClass("non-display").removeClass("display");
		}
	});
});


var tip = document.getElementsByClassName('tip');
var tipArrow = document.getElementsByClassName('tip_arrow');
//遗言
//window.localStorage.getItem(fsm,'state');
//console.log(window.localStorage);

$(document).ready(function(){
	if (dead.length == 0) {
		return;
	}
	else {
		survivor = sessionStorage.alive;
		window.aliveNum = JSON.parse(survivor);
		console.log(aliveNum);
	}
	window.killer = 0;
	window.person = 0;
	for (var i = 0; i < aliveNum.length; i++) {
		if (aliveNum[i] == "杀手") {
			killer++;
		} 
		else if (aliveNum[i] == "水民") {
			person++;
		}
	}
	console.log(person);
	console.log(killer);
	if (killer == 0||person == killer) {
		alert("游戏结束");
		window.location.href="result.html";
	}
});

$("#judge").click(function(){
	window.location.href="judge.html";
});
$("#btn_restart").click(function() {
	var c = confirm("结束本次游戏？");
	if (c == true) {
		sessionStorage.clear();
		window.location.href="index.html";
	} 
	else {
		return;
	}
});


var head= document.getElementsByTagName('head')[0]; 
var script= document.createElement('script'); 
script.type= 'text/javascript'; 
script.src= 'js/new-state-machine.js';
head.appendChild(script); 

//罗马数字转汉字
var chnNumChar = ["零","一","二","三","四","五","六","七","八","九"];
var chnUnitSection = ["","万","亿","万亿","亿亿"];
var chnUnitChar = ["","十","百","千"];

function SectionToChinese(section){
	var strIns = '', chnStr = '';
	var unitPos = 0;
	var zero = true;
	while(section > 0){
		var v = section % 10;
		if(v === 0){
			if(!zero){
				zero = true;
				chnStr = chnNumChar[v] + chnStr;
			}
		}
		else{
			zero = false;
			strIns = chnNumChar[v];
			strIns += chnUnitChar[unitPos];
			chnStr = strIns + chnStr;
		}
			unitPos++;
			section = Math.floor(section / 10);
	}
	return chnStr;
}

function NumberToChinese(num){  
	var unitPos = 0;  
	var strIns = '', chnStr = '';  
	var needZero = false;  
			   
	if(num === 0){  
		return chnNumChar[0];  
	} 		   
	while(num > 0){  
		var section = num % 10000;  
		if(needZero){  
			 chnStr = chnNumChar[0] + chnStr;  
		}  
		strIns = SectionToChinese(section);  
		strIns += (section !== 0) ? chnUnitSection[unitPos] : chnUnitSection[0];  
		chnStr = strIns + chnStr;  
		needZero = (section < 1000) && (section > 0);  
		num = Math.floor(num / 10000);  
		unitPos++;  
	}
	return chnStr;
}

$(".arrow_icon").click(function(){
	window.history.back();
});
$(".shutdown_icon").click(function(){
	var c = confirm("退出游戏？");
	if (c == true) {
		sessionStorage.clear();
		window.location.href="index.html";
	} 
	else {
		return;
	}
});