/**
 * PROBLEM:
 * Print integers one-to-N, but print “Fizz” if an integer is divisible by three, “Buzz” if an integer is divisible by five, and “FizzBuzz” if an integer is divisible by both three and five.
 */

function printFizzBuzz(n: number) {
	const returner = [];

	for (let i = 1; i <= n; i++) {
		if (i % 3 === 0 && i % 5 === 0) returner.push('“FizzBuzz”');
		else if (i % 3 === 0) returner.push('“Fizz”');
		else if (i % 5 === 0) returner.push('“Buzz”');
		else returner.push(i);
	}

	return returner;
}

console.log(printFizzBuzz(15));
