const alpha = ['abc', 'def', 'ghi', 'lmn', 'hfw'];
const constraints = ['a', 'h'];
const valuesToKeep = alpha.slice().filter((w) => {
	const [constraintOne, constraintTwo] = constraints;
	return w.includes(constraintOne) || w.includes(constraintTwo) ? true : false;
});
console.log('Vals to keep:: ', valuesToKeep);
