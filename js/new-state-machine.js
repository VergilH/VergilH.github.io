var deadPerson = sessionStorage.Arr;
var dead = JSON.parse(deadPerson);
var fre = sessionStorage.getItem('step');//开始状态

var round = 0;//游戏回合数
var murderI = round + 0;
var lastWordI = round + 1;
var discussI = round + 2;
var voteI = round + 3;
$(document).ready(function(){
	for (var i = 1; i < dead.length; i=i+2) {
		$(".tip:eq("+ murderI +")").css("background-color","#83b09a");
		$(".tip:eq("+ murderI +") .tip_arrow").css("border-left-color","#83b09a");
		$(".tip:eq("+ lastWordI +")").css("background-color","#83b09a");
		$(".tip:eq("+ lastWordI +") .tip_arrow").css("border-left-color","#83b09a");
		$(".tip:eq("+ discussI +")").css("background-color","#83b09a");
		$(".tip:eq("+ discussI +") .tip_arrow").css("border-left-color","#83b09a");
		$(".tip:eq("+ voteI +")").css("background-color","#83b09a");
		$(".tip:eq("+ voteI +") .tip_arrow").css("border-left-color","#83b09a");
		$(".deadInfo").css("display","block");
		$(".deadInfo").last().css("display","none");
		$(".sun").css("top","106px");
		$(".sun").last().css("top","75px");
		round = round + 4;
		murderI = round + 0;
		lastWordI = round + 1;
		discussI = round + 2;
		voteI = round + 3;
	}
});

$(document).ready(function(){
	var info = 0,name = 0;
	for (var i = -1; i < dead.length; i=i+2) {
		killed = dead[name];
		deadMan = dead[name]+1;
		$(".deadInfo:eq("+ info +")").html(deadMan + "号被杀手杀死，真实身份是" + playerNumber[killed]);
		info++;
		name = name+2;
	}
});

var murder = document.getElementsByClassName("tip")[murderI];
var lastWord = document.getElementsByClassName("tip")[lastWordI];
var discuss = document.getElementsByClassName("tip")[discussI];
var vote = document.getElementsByClassName("tip")[voteI];

if (fre=="step1") {
	var data = 'step1';
}
else {
	var data = 'start';
}
console.log(data);
var fsm = new StateMachine({
	init: data,
	transitions: [
		{name:'murder', from:'start', to:'step1'},
		{name:'lastWord', from:'step1', to:'step2'},
		{name:'discuss', from:'step2', to:'step3'},
		{name:'vote', from:'step3', to:'step4'}
	],
	methods: {
		onEnterStep1: function() {
			sessionStorage.setItem('step','step1');
			$(".tip:eq("+ murderI +")").css("background-color","#83b09a");
			$(".tip:eq("+ murderI +") .tip_arrow").css("border-left-color","#83b09a");
			$("#murder").on('click','.deadInfo',function(){
				$(".deadInfo").css("display","block");
			});
			$(".deadInfo").css("display","block");
			//window.deadMan = dead[killed] + 1;
			//$(".deadInfo").html(deadMan + "号被杀手杀死，真实身份是" + playerNumber[dead[killed]]);
			$(".sun").css("top","106px");
		},
		onEnterStep2: function() {
			$(".tip:eq("+ lastWordI +")").css("background-color","#83b09a");
			$(".tip:eq("+ lastWordI +") .tip_arrow").css("border-left-color","#83b09a");
		},
		onEnterStep3: function() {
			$(".tip:eq("+ discussI +")").css("background-color","#83b09a");
			$(".tip:eq("+ discussI +") .tip_arrow").css("border-left-color","#83b09a");
		},
		onEnterStep4: function() {
			$(".tip:eq("+ voteI +")").css("background-color","#83b09a");
			$(".tip:eq("+ voteI +") .tip_arrow").css("border-left-color","#83b09a");
			window.sessionStorage.removeItem('step');
		}
	}
});
murder.onclick = function() {
	switch(fsm.state) {
		case "start":
		window.location.href="killing.html";
		fsm.murder();
		break;
		default:
		alert("已经杀过人了,亡灵开始发表遗言");
	}
	console.log(fsm.state);
}
lastWord.onclick = function() {
	switch(fsm.state) {
		case "start":
		alert("杀手还未杀人");
		break;
		case "step1":
		var i = confirm("亡灵发表遗言");
		if (i == true) {
			fsm.lastWord();
		} 
		else {
			alert("开始发表遗言吧!");
		}
		break;
		default:
		alert("已经发表遗言了，开始讨论吧");
	}
	console.log(fsm.state);
}
discuss.onclick = function() {
	switch(fsm.state) {
		case "start":
		alert("杀手还未杀人");
		break;
		case "step1":
		alert("亡灵还未发表遗言");
		break;
		case "step2":
		i = confirm("玩家发言");
		if (i == true) {
			fsm.discuss();
		} 
		else {
			alert("开始进行讨论吧!");
		}
		break;
		default:
		alert("已经讨论过了，开始投票吧");
	}
	console.log(fsm.state);
}
vote.onclick = function() {
	switch(fsm.state) {
		case "start":
		alert("杀手还未杀人");
		break;
		case "step1":
		alert("亡灵还未发表遗言");
		break;
		case "step2":
		alert("玩家还未讨论");
		break;
		case "step3":
		alert("开始进行投票");
		fsm.vote();
		window.location.href="vote.html";
		break;
		default:
		alert("???")
	}
	console.log(fsm.state);
}