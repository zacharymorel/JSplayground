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
