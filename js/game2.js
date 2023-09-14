'use strict';

function randomNumber1 () {
	const min = +prompt('Введите минимальное число для загадываемого диапазона:', '');
	const max = +prompt('Введите максимальное число для загадываемого диапазона:', '');

	function questionNewGame() {
		const question = confirm('Ваши попытки закончились!Хотите попробовать снова?');
		if(question === true) {
			randomNumber1();
		} else {
			alert('Вы выбрали завершить игру.');
			return;
		}
	}

	if(!Number.isNaN(min) && !Number.isNaN(max)){
		const randomNumber = Math.round(Math.random() * (max - min) + min);
		let userNumber;
		let count;
		const arrNumb = [];

		if( randomNumber >= 50 && randomNumber <= 100) {
			count = 15;
		} else {
			count = Math.round((max - min) * 0.3);
		}

		function guessTheNumber () {
			userNumber = prompt(`Отгадайте число от ${min} до ${max}`, '');
			if(userNumber === null) {
				alert('Игра завершена.');
			}
			if(userNumber === '') {
				alert('Вы не ввели число!');
				guessTheNumber ();
			}
			if(userNumber !== null && userNumber !== ''){
				userNumber = +userNumber;

				if(typeof userNumber == 'number' && !isNaN(userNumber)){

						if(arrNumb.includes(userNumber)){
						alert('Это число вы уже вводили!');
						guessTheNumber();
						} else {
								arrNumb.push(userNumber);
								if(count > 0) {
									if(userNumber > randomNumber) {
										alert('Меньше!');
										count--;
										if(count > 0) {
											guessTheNumber();
										} else {
												questionNewGame();
											}
									} else if(userNumber < randomNumber) {
										alert('Больше!');
										count--;
										if(count > 0) {
											guessTheNumber();
										} else {
												questionNewGame();
											}
									} else {
										alert('Правильно!');
									}
								} else {
									questionNewGame()
								}
							};
				} else if(isNaN(userNumber)) {
					alert('Введите число!');
					guessTheNumber();
				}
			}
		}
		guessTheNumber ();
	} 
};

randomNumber1 ();