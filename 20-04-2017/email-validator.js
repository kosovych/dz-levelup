let userEmail = prompt("Введите ваш E-mail в формате \"address@domain.zone\"");

if (userEmail.indexOf("@") >= 1) {

	let emailAddr = userEmail.slice(0, userEmail.indexOf("@"));

		if (emailAddr.length >= 4) {
			let userDomain = userEmail.slice((userEmail.indexOf("@") + 1), userEmail.indexOf("."));

				if (userDomain.length > 1 && userDomain.length < 10){
					let userZone = userEmail.slice(userEmail.indexOf(".") + 1);

						if (userZone.length >= 2 && userZone.length < 5) {
							alert("Ваш E-mail принят");
						} else {alert("Имя зоны должно сожержать от 2 до 5 символов. Перезагрузите сnраницу и введите E-mail");}
				} else {alert("Имя домина должно быть в пределах от 2 до 10 символов. Перезагрузите сnраницу и введите E-mail");}

		} else{alert("Ваш адресс пользователя должен содержать 4 символа или больше. Перезагрузите сnраницу и введите E-mail");}

} else {alert("Вы не ввели E-mail. Перезагрузите сnраницу и введите E-mail");}