// -----
var screen,
	// 用于没有输入时显示0，有显示时清空。如果为false则表明正在输入
	clearFlag = true,
	// 记录输入的运算符
	operator = "+",
	firstNum = "0",  
	secondNum = "0",
	// 当前要输入第几个数【0】新的一次计算 【1】输入第一个数（被加数）【2】输入第二个数（加数）
	index = 0,
	// 连等次数
	equalNum = 0  

function inputNumber(nums) {
	// 输入数字或运算符时重置连等次数
	equalNum = 0
	screen = document.getElementById("screen")

	// 清除没有输入时的0
	if (clearFlag) {
		screen.value = ""
	}
	// 改变状态，不再清空内容
	clearFlag = false
	screen.value += nums;

	// 如果是新的一次计算,则初始化firstNum，并开启第一个数的输入
	if (index == 0) {
		index = 1;
		firstNum = "";
	}

	if (index == 1) {
		// 正在输入第一个数字
		firstNum += nums;
		// 输入第一个数的时候清空第二个数
		// secondNum = "";
	} else {
		// 正在输入第二个数字
		secondNum += nums;
	}
}

function inputOperator(ope) {
	// 输入数字或运算符时重置连等次数
	equalNum = 0;

	// 新的一次运算
	if (index == 0) {
		// 如果clearFlag为true，则上一次的结果作为这一次的firstNum，并开启第二个数的输入
		if (clearFlag) {
			index = 2
		}
	}

	// 第一个数的输入开启
	if (index == 1) {
		// 正在第一个数的数字输入
		if (!clearFlag) {
			// 此时输入运算符，则表明第一个数输入完毕，开启第二个数的输入
			index = 2;
			// 开启清屏标志
			clearFlag = true;
			operator = ope;
			// 重置第二个数
			secondNum = "";
		}
	} else {
		// 第二个数的输入开启

		// 正在第二个数的数字输入
		if (!clearFlag) {
			// 此时输入运算符，则先进行（5+5）的运算，再继续（10+） 5+5+6
			firstNum = eval(firstNum + operator + secondNum);
			document.getElementById('screen').value = firstNum;

		}

		// 重置operator
		operator = ope;
		// 开启清屏标志
		clearFlag = true;
		// 重置第二个数
		secondNum = "";
	}
}

function clear1() {
	screen = document.getElementById("screen");
	screen.value = "0";
	// 让下次输入可以清空0
	clearFlag = true;
	firstNum = "0";
	secondNum = "0";
	operator = "+";
	index = 0;
	equalNum = 0;
}

function equal() {
	equalNum++;
	screen = document.getElementById("screen");
	// 第一次输入“=”号
	if (equalNum == 1) {
		// 正在输入第一个数，第二个数没有输入 5=
		if (index == 1) {
			equalNum = 0;
		}
		// 正在输入第二个数
		if (index == 2) {
			// 如果第二个数为空或者只有“-”号，则此次操作无效 5+=/5+-=
			if (!secondNum || secondNum == "-") {
				equalNum = 0;
				return;
			}
		}
	}

	console.log(firstNum, operator, secondNum);
	firstNum = eval(firstNum + operator + secondNum);
	screen.value = firstNum;
	// 开启新一次的计算
	index = 0;
	clearFlag = true;
}
