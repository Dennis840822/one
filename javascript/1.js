
		function sum() {
		var a;
		var b;
		var c;
		var sum;
		var advance;

		var a = parseInt(document.getElementById('one').value);
		var b = parseInt(document.getElementById('two').value);
		var c = parseInt(document.getElementById('three').value);

		var sum = a+b+c;

		document.getElementById('four').value = a+b+c;
		document.getElementById('five').value = (a+b+c)/3;

		var advance = parseInt(document.getElementById('five').value);
		if (advance>60) {
			alert("你及格了");
		} else {
			alert("你不及格了");
		}
}