/**
 * A node based data structure.
 * Order is NOT based on physical placement in memory.
 * A list where one node points to the next node.
 * You have the first node, and you can allocate in memory the next node.
 * You have a node which contains a value AND a reference to the next node.
 *
 * A single-ly linked list is a -> b -> c -> d (You can walk backwards since B doesn't have a reference to A)
 * A double-ly linked list
 *
 *
 * Single-ly Linked list: Node contains Val & Next (Single Direction)
 * Double-ly Linked list: Node contains Val & Next & Prev (Bidirectional)
 *
 *
 * Big O
 * prepend/append O(1)
 * insertion in middle O(n)
 * deletion form ends O(n)
 * get start end O(1)
 * get middle O(n)
 *
 * An Idea of the API:
 * EXAMPLE BELOW
 */

// Example of using Generics ofc
interface ILinkedList<T> {
	get length(): number;
	get(index: number): T | undefined;
	insertAt(node: T, index: number): void;
	prepend(node: T): void;
	append(node: T): void;
	remove(node: ListNode<T>): void;
	removeAt(index: number): T | undefined;
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

		const addToArr = (node: ListNode<T>): T[] => {
			arr.push(node.data);
			return node.next ? addToArr(node.next) : arr;
		};

		return addToArr(this._headN);
	}
	public get length(): number {
		return this._traverse().length;
	}
	public get(index: number): T | undefined {
		throw new Error('Method not implemented.');
	}
	public append(node: T): void {
		const n = new ListNode(node);

		if (!this._headN) {
			this._headN = n;
		} else {
			// Recursive function to iterate through the structure and find the last node.
			const getLast = (currNode: ListNode<T>): ListNode<T> => {
				// if the node has a next
				if (currNode?.next) {
					return getLast(currNode.next);
				} else {
					return currNode;
				}
			};

			const lastN = getLast(this._headN);

			if (lastN) {
				// Old Tail next is this node
				lastN.next = n;
				// new Tail is this node
				n.prev = lastN;
			}
		}
	}
	public insertAt(node: T, index: number): void {
		throw new Error('Method not implemented.');
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
		if (!this._headN?.prev) this._headN = node.next;
		else {
			// Get node to delete's previous node and assign it's next value the node to delete's next.
			const nodeToDeletePrev = node.prev;
			if (nodeToDeletePrev?.next) nodeToDeletePrev.next = node.next;
		}
	}
	public removeAt(index: number): T | undefined {
		throw new Error('Method not implemented.');
	}
	public print(): void {
		console.log('LinkedList as an Array: ', this._traverse());
	}
}

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
postList.append(post1);
postList.append(post2);
postList.append(post3);
postList.prepend(post4);
postList.prepend(post5);
postList.print();
