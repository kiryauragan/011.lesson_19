// Написати функцію, яка приймає 1 параметр. з тим, що передали перший раз і т. д.
// Все це із замиканнями, наприклад:
// sum(3) = 3
// sum(5) = 8
// sum(20) = 28

function Counter() {
	let sum = 0; 

	return function (numbers) {
		sum += numbers;
		return sum;
	};
}

const sum = Counter();

let count = Counter();
console.log(sum(3));
console.log(sum(5));
console.log(sum(20)); 
