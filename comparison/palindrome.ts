/**
 * Problem exercise.
 * Compare the words and see if they are backwards.
 * Small tweak to the solution: half the array initially since we only have to
 * iterate through half of the array and compare front to back half.
 */

const palindrome = 'mom';
let isSame;

for (let i = 0; i <= (palindrome.length - 1) / 2; i++) {
	console.log(
		i,
		' | ',
		palindrome[i],
		' | ',
		palindrome[palindrome.length - 1 - i]
	);

	if (palindrome[i] === palindrome[palindrome.length - 1 - i]) isSame = true;
	else isSame = false;
}

console.log(isSame);
