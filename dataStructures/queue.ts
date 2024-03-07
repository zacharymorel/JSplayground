/**
 * A data structure that can use an Array or Linked List under the hood.
 * A queue is a specific implementation of a linked list or array.
 * It functions with FIFO. First in First out.
 * Grocery line, ticketing system, video processing stream feed?
 *
 * We don't need a doubly linked list, just a singly.
 * A queue is shockingly simple. All it is doing is constraining what you can do with a queue.
 *
 * Example:
 * A -> B -> C -> D
 *
 * A is Head.
 * D is Tail.
 * All we have to do is keep track of head and tail.
 *
 * Performance. Push and Pop are constant.
 * Big O = O(1)
 *
 * Example on: https://github.com/zacharymorel/kata-machine/blob/3bf6245de9748cee74a833baea1ff66792845a6b/src/day1/Queue.ts
 */
