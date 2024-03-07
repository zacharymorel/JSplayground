/**
 * A node based data structure.
 * Order is NOT based on physical placement in memory.
 * A list where one node points to the next node.
 * You have the first node, and you can allocate in memory the next node.
 * You have a node which contains a value AND a reference to the next node.
 *
 * A single-ly linked list is a -> b -> c -> d (You can't walk backwards since B doesn't have a reference to A)
 * A double-ly linked list a <-> b <-> c <-> d (You CAN walk backwards since B doesn't have a reference to A)
 *
 * Single-ly Linked list: Node contains Val & Next (Single Direction)
 * Double-ly Linked list: Node contains Val & Next & Prev (Bidirectional)
 *
 * Big O
 * prepend/append O(1)
 * insertion in middle O(n)
 * deletion O(n)
 * get index O(n)
 */

// Example of using Generics ofc
interface ILinkedList<T> {
	get length(): number;
	get(index: number): T | null;
	insertAt(node: T, index: number): void | null;
	prepend(node: T): void;
	append(node: T): void;
	remove(node: ListNode<T>): void;
	removeAt(index: number): void | null;
	print(): void;
}

interface IListNode<T> {
	data: T | null;
	next: ListNode<T> | null;
	prev: ListNode<T> | null;
}

class ListNode<T> implements IListNode<T> {
	private _data: T;
	public get data() {
		return this._data;
	}
	public next: ListNode<T> | null = null;
	public prev: ListNode<T> | null = null;
	constructor(data: T) {
		this._data = data;
	}
}

class LinkedList<T> implements ILinkedList<T> {
	private _headN: ListNode<T> | null = null;

	private _traverse(): T[] {
		const arr: T[] = [];

		if (!this._headN) return arr;

		let nextN: ListNode<T> | null = this._headN;
		let currentN: ListNode<T> = this._headN;

		while (nextN) {
			if (nextN) {
				currentN = nextN;
				arr.push(currentN.data);
			}

			nextN = nextN.next;
		}

		return arr;
	}

	public get length(): number {
		return this._traverse().length;
	}

	public get(index: number): T | null {
		if (!index) return null;
		return this._traverse()?.[index];
	}

	public append(node: T): void {
		const n = new ListNode(node);

		if (!this._headN) {
			this._headN = n;
		} else {
			let lastN;
			let nextN: ListNode<T> | null = this._headN;

			while (nextN) {
				if (nextN && nextN.next === null) lastN = nextN;
				nextN = nextN.next;
			}

			if (lastN) {
				// Old Tail next is this node
				lastN.next = n;
				// new Tail is this node
				n.prev = lastN;
			}
		}
	}

	// Inserts new node from graph at given index
	public insertAt(node: T, index: number): void | null {
		const len = this.length;
		if (!index || len === 0 || len - 1 < index) return null;

		const n = new ListNode(node);
		let currI = 0;
		let currN = this._headN;
		let prevN;

		// While loop to walk up the graph to the index just before where we want to insert at.
		while (currI < index) {
			currN = currN ? currN.next : null;
			prevN = currN ? currN.prev : null;
			currI++;
		}

		if (n) {
			n.prev = prevN ? prevN : null;
			n.next = currN ? currN : null;
			if (prevN) prevN.next = n;
			if (currN) currN.prev = n;
		}
	}

	public prepend(node: T): void {
		const n = new ListNode(node);
		if (!this._headN) this._headN = n;
		else {
			// Old head moved towards tail.
			this._headN.prev = n;
			// Old head is now next in line to this one.
			n.next = this._headN;
			// new Node is now head.
			this._headN = n;
		}
	}

	// Removes node from graph
	public remove(node: ListNode<T>): void {
		// Case where the node to remove is the first node.
		if (!node.prev) this._headN = node.next;
		else {
			// Get node to delete's previous node and assign it's next value the node to delete's next.
			const deleteNodePrev = node.prev;
			const deleteNodeNext = node.next;
			if (deleteNodePrev?.next) deleteNodePrev.next = deleteNodeNext;
			if (deleteNodeNext?.prev) deleteNodeNext.prev = deleteNodePrev;
		}
	}

	// Removes node from graph at index
	public removeAt(index: number): void | null {
		const len = this.length;
		if (len === 0 || !index) return null;

		let currI = 0;
		let currN = this._headN;
		let prevN;

		// Walk up the graph to find node to remove.
		while (currI < index) {
			// Assign the current to the next node
			currN = currN?.next ? currN.next : null;
			// Assign the prev
			prevN = currN?.prev ? currN.prev : null;
			currI++;
		}

		// Remove at index
		if (currN) {
			const nodeAfterCurr = currN.next;
			if (prevN) prevN.next = nodeAfterCurr;
			if (currN.next) {
				if (nodeAfterCurr && prevN) nodeAfterCurr.prev = prevN;
			}
		}
	}

	public print(): void {
		console.log('LinkedList as an Array: ', this._traverse());
	}
}

// THIS IS EXAMPLE class that will use the linked List data structure.
class Post {
	public title: string | null = null;
	constructor(title: string) {
		this.title = title;
	}
}

const post1 = new Post('Post 1');
const post2 = new Post('Post 2');
const post3 = new Post('Post 3');
const post4 = new Post('Post 4');
const post5 = new Post('Post 5');

const postList = new LinkedList<Post>();

console.log('PREPEND & APPEND');
// APPEND
postList.append(post1);
postList.append(post2);
postList.append(post3);

// PREPEND
postList.prepend(post4);
postList.prepend(post5);
postList.print();
console.log('');

// INSERT AT
console.log('INSERT');
postList.insertAt(new Post('Post 6'), 2);
postList.print();
console.log('');

// REMOVE AT
console.log('REMOVE');
postList.removeAt(2);
postList.print();
console.log('');

// GET AT
console.log('GET at index 3');
console.log(postList.get(3));
console.log('');
