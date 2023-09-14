'use strict';

const generateNumbersRangeOddEven = (amount, n, m, str) => {
	const newArr = [];
	const copyStr = str.toLowerCase();

	for (let i = 0; i < amount; i++) {
		if(copyStr === 'even') {
			if (m > n) {
				let newNumb = Math.round(Math.random() * (m - n) + n);
				if(newNumb % 2 === 0) {
					if(newNumb === -0){
						newNumb = Math.abs(newNumb);
						newArr.push(newNumb);
					} else {
						newArr.push(newNumb);
					}
				} else {
					i--
				}
			}
			if(n > m) {
				let newNumb = Math.round(Math.random() * (n - m) + m);
				if(newNumb % 2 === 0) {
					if(newNumb === -0){
						newNumb = Math.abs(newNumb);
						newArr.push(newNumb);
					} else {
						newArr.push(newNumb);
					}
				} else {
					i--
					newNumb = Math.round(Math.random() * (n - m) + m);
				}
			}
		}

		if(copyStr === 'odd') {
			if (m > n) {
				let newNumb = Math.round(Math.random() * (m - n) + n);
				if(newNumb % 2 !== 0) {
					if(newNumb === -0){
						newNumb = Math.abs(newNumb);
						newArr.push(newNumb);
					} else {
						newArr.push(newNumb);
					}
				} else {
					i--
				}
			}
			if(n > m) {
				let newNumb = Math.round(Math.random() * (n - m) + m);
				if(newNumb % 2 !== 0) {
					if(newNumb === -0){
						newNumb = Math.abs(newNumb);
						newArr.push(newNumb);
					} else {
						newArr.push(newNumb);
					}
				} else {
					i--
				}
			}
		}
	}

	return newArr;
}

console.log(`Положительные нечетные n < m (диапазон от 10 до 15): `, generateNumbersRangeOddEven(20, 10, 15, 'odd'))
console.log(`Положительные четные n > m (диапазон от 20 до 10): `, generateNumbersRangeOddEven(20, 20, 10, 'even'))
console.log(`Отрицательные четные n < m (диапазон от -20 до -10): `, generateNumbersRangeOddEven(20, -20, -10, 'even'))
console.log(`Отрицательные нечетные n > m (диапазон от -10 до -20): `, generateNumbersRangeOddEven(20, -10, -20, 'odd'))
console.log(`Отрицательные и положительные нечетные  n < m (диапазон от -10 до 20):`, generateNumbersRangeOddEven(20, -10, 20, 'odd'))
console.log(`Полодительные и отрицательные четные n > m : (диапазон от 10 до -20)`, generateNumbersRangeOddEven(20, 10, -20, 'even'))