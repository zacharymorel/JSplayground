console.log('SUM ALL VALUES');
const array = [1, 2, 3, 4];
const val = array.reduce((acc, curr) => {
	return acc + curr;
});

console.log(val);
console.log('\n');

console.log('Combine objects');
const array2 = [
	{ key1: 'first', key2: 'first' },
	{ key2: 'second', key3: 'first' },
	{ key4: 'first', key3: 'second' }
];

// override
const obj1 = Object.assign({}, ...array2);
console.log('override');
console.log('1: ', obj1);

// override
const obj2 = array2.reduce((acc, curr) => Object.assign({}, acc, curr));
console.log('2: ', obj2);
console.log('\n');

// Keep first occurrence
const obj3 = array2.reduce((acc, curr) => {
	const currkeys = Object.keys(curr);
	currkeys.forEach((k) => {
		if (!acc[k]) acc[k] = curr[k];
		else return;
	});

	return acc;
});
console.log('Keep First occurrence');
console.log('3: ', obj3);
console.log('\n');
