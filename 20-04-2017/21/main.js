
let YorN = confirm("Приветствуем вас в игре \"21\". \
	Вам выпал шанс сыграть первым. \
	Нажмите \"OK\" для начала или \"Отмена\" для выхода.");



if (YorN) {
	var user1 = randomNumb();
} else alert("Вы отменили участие в игре.");

function randomNumb() {
	var contin = true;

	alert("Сейчас для вас сгенерируется случайное число.\
		Нажмите \"ОК\" чтобы проложить.");
	var userNumb = 0;
	
	for (;;){
		
		userNumb += Math.round(Math.random()*11);
		if (userNumb > 21) break;
		contin = confirm(`Ваше число ${userNumb}. Если хотите продолжить - нажмите \"ОК\",\
			 чтобы закончить и/или передать ход нажмите \"Отмена\"`);
		if (contin === false) break;

	};
	return userNumb;
};

if (user1 > 21) {
	alert(`Вы проиграли. Ваше число больше ${user1} и оно больше 21`);
} else {
	var user2 = randomNumb();
};

if (user1 > user2) {
	alert("Первый игрок выиграл. Поздравляем!");
} else if (user1 < user2) {
	alert("Второй игрок выиграл. Поздравляем!");
} else alert("Победила дружба! :)");