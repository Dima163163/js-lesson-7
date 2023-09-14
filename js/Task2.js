'use strict';

const generateNumbersRange = (amount, n, m) => {
	const newArr = [];

	for (let i = 0; i < amount; i++) {
		if (m > n) {
			let newNumb = Math.round(Math.random() * (m - n) + n);
			if(newNumb === -0){
				newNumb = Math.abs(newNumb);
				newArr.push(newNumb);
			} else {
				newArr.push(newNumb);
			}
		}
		if(n > m) {
			let newNumb = Math.round(Math.random() * (n - m) + m);
			if(newNumb === -0){
				newNumb = Math.abs(newNumb);
				newArr.push(newNumb);
			} else {
				newArr.push(newNumb);
			}
		}
	}

	return newArr;
}

console.log(`Положительный n < m (диапазон от 10 до 15): `, generateNumbersRange(20, 10, 15))
console.log(`Положительный n > m (диапазон от 20 до 10): `, generateNumbersRange(20, 20, 10))
console.log(`Отрицательный n < m (диапазон от -20 до -10): `, generateNumbersRange(20, -20, -10))
console.log(`Отрицательный n > m (диапазон от -10 до -20): `, generateNumbersRange(20, -10, -20))
console.log(`Отрицательный и положительный n < m (диапазон от -10 до 20): `, generateNumbersRange(20, -10, 20))
console.log(`Полодительный и отрицательный n > m (диапазон от 10 до -20): `, generateNumbersRange(20, 10, -20))