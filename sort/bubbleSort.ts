/**
 * Bubble sort, at the bases:
 * - I left index as the right index if my value is larger than it.
 * - If my value is larger, we SWAP places.
 *
 * In 1 iteration, the largest item is at the end. ALWAYS.
 * That means in the next iteration, we only have to go up to the
 * next position that needs sorting, NOT the last one we just sorted.
 *
 *
 * Big O = O(n^2)
 */

function bubbleSort(numbers: number[]) {
	for (let i = 0; i < numbers.length; i++) {
		// In J, we don't want to go to the last Index on the first array because
		// we will get an out of bounds error in the comparison. There is no element there.
		for (let j = 0; j < numbers.length - 1 - i; j++) {
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
