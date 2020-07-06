var screen,
	// 用于没有输入时显示0，有显示时清空
	flag = true,
	// 记录最后一次输入的运算符
	operator,
	// 记录最后一次输入的数
	lastNum,
	// 连等次数
	equalNum = 0

function inputNumber(nums) {
	// 输入数字或运算符时重置连等次数
	equalNum = 0
	screen = document.getElementById("screen")
	// 清除没有输入时的0
	if (flag) {
		screen.value = ""
	}

	// 改变状态，不再清空内容
	flag = false

	// 将之前的内容与输入的内容相加，重新显示
	screen.value += nums

	// 记录最新一次输入的运算符，为连等运算做准备
	if (nums == "+" || nums == "-" || nums == "/" || nums == "*") {
		operator = nums
	}
}

function clear1() {
	screen = document.getElementById("screen")
	screen.value = "0"
	// 让下次输入可以清空0
	flag = true
}

function equal() {
	equalNum++
	screen = document.getElementById("screen")
	// 如果连等次数为1，则记录最后一次输入的数，为连等运算做准备
	if (equalNum == 1) {
		let arr = screen.value.split(operator)
		lastNum = arr[arr.length - 1]
	}
	// 如果连等次数超过1，则进行连等运算
	if (equalNum > 1) {
		screen.value = eval(screen.value + operator + lastNum)
		return
	}
	screen.value = eval(screen.value)
}