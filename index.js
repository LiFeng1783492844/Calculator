function f1() {
	var input = document.getElementById("txt1").value;

	// var arr = input.split(',').map(p => {
	// 	console.log(p);
	// 	return parseInt(p)
	// });
	var arr = input.split(',').map(p=>parseInt(p))

	if (arr.length > 1) {
		var minIndex;
		for (var i = 0; i < arr.length; i++) {
			minIndex = i;
			for (var j = i + 1; j < arr.length; j++) {
				if (arr[j] < arr[minIndex]) {
					minIndex = j;
				}
			}
			if (minIndex != i) {
				var t = arr[i];
				arr[i] = arr[minIndex];
				arr[minIndex] = t;
			}
		}
	}

	document.getElementById("txt2").value = arr.join(",");

	// let txt1 = document.getElementById("txt1")
	// let txt2 = document.getElementById("txt2")

	// let array = txt1.value.split(",")
	// console.log(array);

	// // 数组排序 由小到大
	// for (let i = 0; i < array.length - 1; i++) {
	// 	for(let j = i+1;j<array.length;j++){
	// 		if (array[i] > array[j]) {
	// 			let tmp = array[i]
	// 			array[i] = array[j]
	// 			array[j] = tmp
	// 		}
	// 	}
	// }
	// console.log(array);

	// txt2.value = array.join(',')

}