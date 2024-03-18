const n: string = 'james';

function reverseStr(str: string): string | undefined {
	if (!str) return undefined;

	let s = '';

	for (let i = str.length - 1; i >= 0; --i) {
		s = s.concat(str[i]);
	}

	return s;
}

console.log(reverseStr(n));
