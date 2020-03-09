var formContrl = document.querySelectorAll('header>*');
var namae = document.getElementById('namae');
var age = document.getElementById('age');
var sex = document.getElementById('sex');
var table = document.querySelector('table');
var tBody = table.tBodies[0];
var tFootChild = table.tFoot.rows[0].cells[0].children;
var nub = 0;
console.log(namae);
formContrl[formContrl.length - 1].onclick = function() {
	/* 判断输入 内容 略 */
	/* 生成元素 */
	nub++;
	var tr = document.createElement("tr");
	tr.innerHTML = '<th><input type="checkbox" name=""></th><th>' + nub + '</th><th>' + namae.value +
		'</th><th>' + age.value + '</th><th>' + sex.value +
		'</th><th><a href="javascript:;"><i class="layui-icon layui-icon-up"></i></a>   <a href="javascript:;"><i class="layui-icon layui-icon-down"></i></a>   <a href="javascript:;"><i class="layui-icon layui-icon-close"></i></a></th>';
		console.log(name.value);
		console.log(sex.value);
	/* 绑定事件 */
	var a = tr.querySelectorAll('a');
	var check = tr.querySelector('input');
	/*选中单个时候，操作整体书否全选 */
	check.onchange = setCheckAll;
	tFootChild[0].checked = false;

	/* 上移 */
	a[0].onclick = function() {
		if (tr.previousElementSibling) {
			tBody.insertBefore(tr, tr.previousElementSibling);
		} else {
			//alert("已经是第一个了");
			tBody.appendChild(tr);
		}
	};
	/* 下移 */
	a[1].onclick = function() {
		if (tr.nextElementSibling) {
			tBody.insertBefore(tr.nextElementSibling, tr);
		} else {
			//alert("已经是第一个了");
			tBody.insertBefore(tr, tBody.rows[0]);
		}
	};
	/*删除 */
	a[2].onclick = function() {
		tBody.removeChild(tr);
		setCheckAll();
	};
	/* 插入元素 */
	tBody.appendChild(tr);
};
tFootChild[0].onchange = function() {
	/*操作 所有复选框的全选和全不选*/
	var checks = tBody.querySelectorAll('input');
	var _this = this;
	checks.forEach(function(value) {
		value.checked = _this.checked;
	});
};

/*删除选中 */
tFootChild[1].onclick = function() {
	/*操作 所有复选框的全选和全不选*/
	var checks = tBody.querySelectorAll('input');
	var _this = this;
	checks.forEach(function(value) {
		if (value.checked) {
			tBody.removeChild(value.parentNode.parentNode);
		}
	});
};


/*设置全选*/
function setCheckAll() {
	tFootChild[0].checked = getCheckAll();
}
/* 获取这一组的check是否全部选中 */
function getCheckAll() {
	var checks = tBody.querySelectorAll('input');
	for (var i = 0; i < checks.length; i++) {
		if (!checks[i].checked) {
			return false;
		}
	}
	return true;
}
