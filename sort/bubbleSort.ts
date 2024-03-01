function bubbleSort(numbers: number[]) {
	for (let i = 0; i < numbers.length; i++) {
		for (let j = 0; j < numbers.length - i; j++) {
			const left = numbers[j];
			const right = numbers[j + 1];
			if (left > right) {
				numbers[j] = right;
				numbers[j + 1] = left;
			}
		}
	}
	return numbers;
}
console.log('Sorting lowest to highest');
console.log(bubbleSort([1, 2, 3, 4, 5, 6, 7]));
console.log(bubbleSort([3, 2, 1]));
console.log(bubbleSort([]));
console.log(bubbleSort([1, 4, 6, 4]));
