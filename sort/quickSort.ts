/**
 * Divide and conquer!
 *
 * Spilt your input in to subsets (chunks) and be able to go over things faster.
 *
 * [                        ] P will be the pivot?
 * 0                        N
 * WE have two pointers.
 * 1 that iterates over the entire array and checks to see if the current i is less than our pivot point. If so, we add it to our 2nd pointer.
 *
 * This is known as a weak sort
 * Pivot will be in the middle or the end value!
 * Everything to the left of the Pivot will be LESS THAN or equal too.
 * Everything to the right of the Pivot will be GREATER THAN the Pivot.
 *
 * WE DO THE SAME Process of the two subsets arrays.
 * Pick new pivots in each subset and so on.
 * We do this until there is nothing left to sort.
 *
 * There will be a low and high side.
 * Think of this like a tree.
 * i.e.
 *                              array 32 size
 *                               0  -  32
 *                                  16 P
 *                         0-15              17-31
 *                          8p                 24
 *                   1-7          9-15
 *                    4p           12p
 *                 1-3 5-7      9-11    13-15
 *                  2   6        10       14
 *             1,1 3,3 5,5 7,7 9,9 11,11 13,13 15,15
 * BOTTOM PART means all those pieces are sorted, we have them all.
 *
 * Big O = 0(nlogn)
 *
 * which is n
 *          - = 1
 *          2k
 *
 * Condition where we can get the worst possible answer.
 * A reverse sorted array is the worse condition.
 * ALWAYS pick the middle element to prevent 0(n^2)
 */

function qs(arr: number[], lo: number, hi: number, log: boolean): void {
	// BASE CASE
	if (lo >= hi) {
		return;
	}

	const pivotIndex = partition(arr, lo, hi, log);
	// pivot - 1 or pivot + 1 is always where we sort.
	// Sort everything on the left of the pivot
	qs(arr, lo, pivotIndex - 1, true);
	// Sort everything on the right of the pivot
	qs(arr, pivotIndex + 1, hi, false);
}

// Lo is start of current partition and hi is end of current partition
// Returns the pivot index
function partition(
	arr: number[],
	lo: number,
	hi: number,
	log: boolean
): number {
	const pivot = arr[hi];
	let loPointer = lo - 1; // we go - 1 back from the lo because we need to be able to put stuff in the lo position. (partition Index)

	// Looping over the portion of the array between the lo and hi indices
	console.log('subset: ', arr.slice(lo, hi));
	console.log(`i pivot: ${hi}: ${pivot}`);
	for (let i = lo; i < hi; i++) {
		// if value is less than pivot value, we move it over to the left of the pivot
		if (arr[i] <= pivot) {
			// BIG NOTE: if the curr value is larger than the pivot, the currIndex and the pivotIndex becomes out of sync
			loPointer++;
			console.log(
				`before swap: ${i}: ${arr[i]} |  ${loPointer}:  ${arr[loPointer]}`
			);
			const temp = arr[i];
			arr[i] = arr[loPointer];
			arr[loPointer] = temp;
			console.log(
				`after swap: ${i}: ${arr[i]} |  ${loPointer}:  ${arr[loPointer]}`
			);
		}
	}

	loPointer++; // The lo index is moved up  last time for moving the pivot to the middle.
	arr[hi] = arr[loPointer]; // swap current lo with hi
	arr[loPointer] = pivot; // Current lo will be the pivots spot.
	//WE ARE SORTING ALL PIVOTS until there is only 1 element left in each subset array.
	console.log('NEXT PIVOT index: ', loPointer);
	// Return the pivot index
	return loPointer;
}

function quick_sort(arr: number[]): void {
	qs(arr, 0, arr.length - 1, true);
}

const testArr = [9, 3, 7, 560, 4, 69, 420, 42];
console.log('unsorted: ', testArr);
console.log();

quick_sort(testArr);
console.log();
console.log('sorted: ', testArr);
