/**
 * Array Lists are Data structures that use Array INSTEAD of graph Nodes under the hood that still have following functions.
 * - pop
 * - push
 * - insertAt
 * - removeAt
 * - get
 * - prepend
 *
 * With Arrays, we set C for container being the size of the array.
 * We leverage the len of the array to do operations.
 * What happens with Push when we exceed capacity?
 * - We create a new array with bigger capacity.
 * - Say new array len will be 6 instead of 3.
 * - We copy over 1 at a time to the new array.
 *
 * - We don't use ArrayLists for queue structures at all if we can help it.
 * - With Enqueue and Dequeue, we have to shift over EVERY array index.
 *
 * - Array Lists good with push and pop, not good with enqueue and dequeue.
 * O(1) push and pop
 * o(n) enqueue and dequeue.
 */

/**
 * Why would you use one over the other?
 * It depends on scenario and needs of program.
 * - Getting sucks on linked list.
 *      - Have to linear search through and find the node
 * - Removing from Front sucks on Array List.
 *      - Have to move every sequential indices over by 1.
 *
 */

class ArrayList<T> {
	public length: number;
	private _list: T[];
	private _capacity: number;

	constructor(size?: number | undefined) {
		this._list = [];
		this.length = 0;
		this._capacity = size ?? 0;
	}

	prepend(item: T): void {
		if (this._capacity === this.length) this._capacity += 10;
		this.length += 1;

		if (this.length === 0) {
			this._list = [item];
		} else {
			const oldArr = this._list;
			const newArr = [item];
			for (let i = 0; i < oldArr.length; i++) {
				newArr[i + 1] = oldArr[i];
			}

			this._list = newArr;
		}

		return;
	}

	insertAt(item: T, idx: number): void {
		if (!item || idx === undefined || idx === null) return;
		if (this._capacity === this.length) this._capacity += 10;

		if (this.length === 0) {
			this.length += 1;
			this._list = [item];
		} else {
			const oldArr = this._list;
			const newArr = [];
			for (let i = 0; i < oldArr.length; i++) {
				if (i < idx) newArr[i] = oldArr[i];
				else if (i === idx) newArr[i] = item;
				else newArr[i + 1] = oldArr[i];
			}
			this._list = newArr;
		}
		return;
	}

	append(item: T): void {
		if (this._capacity === this.length) this._capacity += 10;

		if (this.length === 0) {
			this._list = [item];
			this.length += 1;
		} else {
			const oldArr = this._list;
			const newArr = [];
			for (let i = 0; i < oldArr.length; i++) {
				newArr[i] = oldArr[i];

				// Final append item
				if (i === oldArr.length - 1) newArr[i + 1] = item;
			}

			this.length += 1;
			this._list = newArr;
		}

		return;
	}

	remove(item: T): T | undefined {
		if (!item) return undefined;
		if (Math.floor(this._capacity / this.length) > 2) {
			this._capacity -= this.length * 2; // shrink Array list memory
		}
		let returner = undefined;
		let match = false;
		const newArr: T[] = [];
		for (let i = 0; i < this._list.length; i++) {
			if (this._list[i] === item) {
				returner = this._list[i];
				match = true;
				continue;
			} else {
				if (match) newArr[i - 1] = this._list[i];
				else {
					newArr[i] = this._list[i];
				}
			}
		}
		this._list = newArr;
		this.length = Math.max(0, (this.length -= 1));

		return returner;
	}

	get(idx: number): T | undefined {
		if (idx === undefined || idx === null) return undefined;
		if (this.length === 0) return undefined;
		if (typeof idx === 'number') {
			return this._list[idx];
		}

		return undefined;
	}

	removeAt(idx: number): T | undefined {
		if (idx === undefined || idx === null) return undefined;
		if (typeof idx !== 'number') return undefined;
		if (!this._list[idx]) return undefined;
		if (Math.floor(this._capacity / this.length) > 2) {
			this._capacity -= this.length * 2; // shrink Array list memory
		}

		let returner = undefined;
		const newArr = [];
		for (let i = 0; i < this._list.length; i++) {
			if (i < idx) newArr[i] = this._list[i];
			else if (i === idx) {
				returner = this._list[i];
				continue;
			} else newArr[i - 1] = this._list[i];
		}

		this.length = Math.max(0, (this.length -= 1));
		this._list = newArr;
		return returner;
	}

	print(): void {
		console.log('ArrayList list: ', this._list);
		console.log('ArrayList capacity: ', this._capacity);
	}
}

const AList = new ArrayList(3);
AList.prepend(1);
AList.prepend(2);
AList.prepend(3);
AList.append(4);
AList.append(5);

AList.insertAt(6, 4);
AList.append(7);

console.log('Removed Item AT index 1:: ', AList.removeAt(1));

console.log('GET at index 2: ', AList.get(2));
AList.append(8);

console.log('Remove Item with value 3:: ', AList.remove(3));
AList.print();
console.log('AList size:: ', AList.length);
