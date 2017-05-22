function func() {

	let start = Number(prompt("Введите начальное число")),

		step = Number(prompt("Введите шаг счетчика")),

		iterate = Number(prompt("Введите число повторений"));

	for(var i = start; iterate > 0; iterate--) {
		i = i + start;
};
	alert(i);
}

func();