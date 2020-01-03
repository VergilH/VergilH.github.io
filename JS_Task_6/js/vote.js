str = sessionStorage.playerNumber;
console.log(str);
playerNumber = JSON.parse(str);
console.log(playerNumber);
playerNumber.indexOf(1);
var player = playerNumber.length;
mainDiv = document.getElementsByClassName('choise-person');
function addChoiseButton() {
	for (var i = 0;i < player;i++) {
		var icon = document.createElement('div');
		icon.className = "icon";
		mainDiv[i].appendChild(icon);
	}
}
window.onload = addChoiseButton(sessionStorage.Arr);

var killer = sessionStorage.getItem("killer");
var person = sessionStorage.getItem("person");

$(document).ready(function(){
	$(".number").addClass("alive");
});

deadPerson = sessionStorage.Arr;
dead = JSON.parse(deadPerson);

$(document).ready(function(){//分辨生死
	if (sessionStorage.getItem("Arr") != null) {
		for (var i = 0;i < dead.length; i++) {
			$(".number:eq("+ dead[i] +")").addClass("dead");
			$(".number:eq("+ dead[i] +")").removeClass("alive");
		}
	}
	else {
		alert("nothing");
	}
});


//选择目标
$(".icon").click(function(){
	window.icon = $('.icon').index(this);
	if ($(".number:eq("+ icon +")").hasClass("dead")) {
		alert("该玩家已死亡");
		window.icon = undefined;
	}
	if ($(".number:eq("+ icon +")").text()=="杀手"&&dead.length%2==0) {//判断是否杀手选择正确目标
		alert("杀手不能选择杀手");
		window.icon = undefined;
	}
	console.log(icon);
});
//判断是否选取目标
$("#footerBtn").click(function(){
	if (typeof(icon) == "undefined") {
		alert("先选择某人");
	}
	else {
		$(".number:eq("+ icon +")").addClass("dead");
		dead.push(icon);
		window.deadPerson = JSON.stringify(dead);
		sessionStorage.Arr = deadPerson;
		window.location.href="daily.html";
	}
	if (sessionStorage.getItem("Arr") != null) {
		for (var i = 0;i < dead.length; i++) {
			$(".number:eq("+ dead[i] +")").addClass("dead");
			$(".number:eq("+ dead[i] +")").removeClass("alive");
		}
	}
	else {
		alert("nothing");
	}
	var aliveNum = [];
	stillAlive = document.getElementsByClassName("alive");
	console.log(stillAlive.length);
	for (var i = 0; i < stillAlive.length; i++) {
		console.log(stillAlive[i].innerHTML);
		aliveNum.push(stillAlive[i].innerHTML);
		console.log(aliveNum);
		window.survivor = JSON.stringify(aliveNum);
		sessionStorage.alive = survivor;
	}
});

function check(){
	setTimeout(function(){
		if (sessionStorage.getItem("Arr") != null) {
			for (var i = 0;i < dead.length; i++) {
				$(".number:eq("+ dead[i] +")").addClass("dead");
				$(".number:eq("+ dead[i] +")").removeClass("alive");
			}
		}
		else {
			alert("nothing");
		}
	},50);
	setTimeout(function(){
		stillAlive = document.getElementsByClassName("alive");
		for (var i = 0; i < stillAlive.length; i++) {
			console.log(stillAlive[i].innerHTML);
			if (stillAlive[i].innerHTML == "水民") {
				personAlive.push(i);
				window.psAlive = JSON.stringify(personAlive);
				sessionStorage.alive = psAlive;
			}
			else {
				killerAlive.push(i);
				window.goKill = JSON.stringify(killerAlive);
				sessionStorage.ambush = goKill;
			}
		}
	},200);
};

function jump(){
	if (killerAlive.length==0 || personAlive.length==killerAlive.length) {
		alert("game over");
		window.location.href="result.html";
	}
	else {
		alert("keep play");
		window.location.href="daily.html";
	}
}
$(".shutdown-icon").click(function(){
	var c = confirm("退出游戏？");
	if (c == true) {
		sessionStorage.clear();
		window.location.href="index.html";
	} 
	else {
		return;
	}
});