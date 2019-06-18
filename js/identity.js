//玩家数组
str = sessionStorage.playerNumber;
console.log(str);
playerNumber = JSON.parse(str);
console.log(playerNumber);
playerNumber.indexOf(1);
//水民词汇
var people = sessionStorage.peopleWord;
var peopleWord = JSON.parse(people);
console.log(peopleWord);
//杀手词汇
var killer = sessionStorage.killerWord;
var killerWord = JSON.parse(killer);
console.log(killerWord);
var dead = [];//死者
window.deadPerson = JSON.stringify(dead);
sessionStorage.Arr = deadPerson;

//window.onload = getPlayer();
var imgCheck = document.getElementById("img-check");
var imgWow = document.getElementById("img-wow");
var tip = document.getElementById("tip");
var identity = document.getElementById("identity");
var words = document.getElementById("words");
var btn = document.getElementById("footer_btn");
var btn2 = document.getElementById("footer_btn2");
var btn3 = document.getElementById("footer_btn3");

function nextPage() {
	imgCheck.style.display = "none";
	imgWow.style.display = "block";
	tip.style.display = "block";
	identity.style.display = "block";
	words.style.display = "block";
	btn.style.display = "none";
	btn2.style.display = "block";
}

var players = playerNumber.length;
var number = document.getElementById("number");
var number2 = document.getElementById("number2");
var number3 = document.getElementById("number3");
var role = document.getElementById("role");
console.log(role);
var vocabulary = document.getElementById("vocabulary");
var nb = 1;
var s= 0;
number.innerHTML=nb;
number2.innerHTML=nb;
nb++;
number3.innerHTML="隐藏并传递给"+nb+"号";
nb--;
role.innerHTML=playerNumber[s];
s++;
var roleText = role.innerHTML;

//输出号码 玩家角色
function transmit() {
	if (nb<players-1) {
		nb++;
		number.innerHTML=nb;
		number2.innerHTML=nb;
		nb++;
		number3.innerHTML="隐藏并传递给"+nb+"号";
		nb--;
		role.innerHTML=playerNumber[s];
		s++;
	}
	else if (nb=players) {
		number.innerHTML=nb;
		number2.innerHTML=nb;
		number3.innerHTML="法官查看";
		role.innerHTML=playerNumber[s];
		nb++;
	}
}

function other() {
	if (number3.innerHTML=="法官查看") {
		btn.style.display = "none";
		btn2.style.display = "none";
		btn3.style.display = "block";
	}
}
function jump() {
	window.location.href="judge.html";
}

//输出词汇
function word() {
	var roleText = document.getElementById("role").innerHTML;
	if (roleText=="杀手") {
		console.log(roleText);
		vocabulary.innerHTML=killerWord;
	}
	else if (roleText=="水民") {
		console.log(roleText);
		vocabulary.innerHTML=peopleWord;
	}
}

function nextPlayer() {
	btn.style.display = "block";
	btn2.style.display = "none";
	imgCheck.style.display = "block";
	imgWow.style.display = "none";
	tip.style.display = "none";
	identity.style.display = "none";
	words.style.display = "none";
}