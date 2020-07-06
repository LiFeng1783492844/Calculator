var left = "0";
var right = "";
var operator = null;
// 当前输入的数是属于运算符左侧还是右侧【0】左侧；【1】右侧
var index = 0;


// 清屏
function clear1() {
	left = "0";
	right = "";
	operator = "";
	index = 0;
	document.getElementById("screen").value = "0";
}



// 输入小数点
function inputDecimalPoint() {
	clear1();

	// todo:小数点是否可再次输入，以及第一次输入小数点

	input(".");
}

// 输入数字
function inputNumber(num) {
	let screen = document.getElementById("screen");

	// 输入左侧数据
	if (index == 0) {
		// 如果输入左侧数据时，右侧数据不为空，则表明这次输入为新的输入，需要清除界面
		if (right != "") {
			clear1();
		}
		// 如果左侧数据为0
		if (left == "0") {
			// 如果当前输入的数字不为0，则更新左侧数据为当前输入的数字
			if (num != 0) {
				left = num;
			}

			screen.value = left;
			return;
		}

		// 如果左侧数据不为0
		left = left + "" + num;
		screen.value = left;
		return;
	}
	// 输入右侧数据
	right = right + "" + num;
	screen.value = left + operator + right;
}

// 输入运算符
function inputOperator(inputOpe) {


	// 如果输入右侧数据点击运算符
	if (index == 1) {
		// 如果右侧数据不为空，即右侧数据输入完成，则计算结果并再次加上这次的运算符
		if (right != "") {
			equal(operator);
			return;
		}

		
		// todo:乘以负数
		right += inputOpe;

	}
	operator = inputOpe;

	document.getElementById("screen").value = left + inputOpe;

	// 接下来输入右侧数据
	index = 1;
	right = "";

}

function input(c) {
	let screen = document.getElementById("screen");
	left = screen.value;
	console.log(left);

	screen.value = left + c;
}

// 等于，计算结果
function equal(ope) {

	let screen = document.getElementById("screen");
	let val = screen.value;
	let res = '';
	try {
		res = eval(val);
	} catch (e) {
		res = 'Error';
	}

	left = res;

	console.log(left, operator, right, index);

	// 如果是点击“=”号，则只需显示结果
	if (!ope) {
		// 如果index还未置0，则进行正常置0操作
		if (index == 1) {
			screen.value = res;
			index = 0;
			console.log(left, operator, right, index);
			return;
		}

		// 如果index已置0，且操作符不为空，则进行连续运算操作
		if (operator != "") {
			screen.value = eval(left + operator + right);
			left = screen.value;
		}
		return;
	}
	// 如果的点击其他运算符，则显示 结果+运算符
	screen.value = res + ope;
	right = "";
	index = 1;
}
