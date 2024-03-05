/**
 * A node based data structure.
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
 * get start or end O(n)
 * get middle O(n)
 *
 * An Idea of the API:
 * EXAMPLE BELOW
 */

// Example of using Generics ofc
interface LinkedList<T> {
	get length(): number;
	insertAt(item: T, index: number): void;
	remove(item: T): T | undefined;
	removeAt(index: number): T | undefined;
	append(item: T): void;
	prepend(item: T): void;
	get(index: number): T | undefined;
}
