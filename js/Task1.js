'use strict';

const generateNumbers = (amount) => {
	const newArr = [];

	for (let i = 0; i < amount; i++) {
		let newNumb = Math.round(Math.random() * 100);
		newArr.push(newNumb);
	}

	return newArr;
}

console.log(generateNumbers(20))