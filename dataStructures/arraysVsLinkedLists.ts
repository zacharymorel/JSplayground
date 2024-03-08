/**
 * Arrays:
 *
 * Goods:
 * - Accessing values at by indices is O(1).
 * - Setting memory space is simple. Whatever you set as bite size for memory allocation.  That bite size is what the array uses when quickly shifting to correct position to find value needed at the memory position.
 *
 *
 *
 *
 * Problems:
 * - You can't insert directly where desired.
 * - You have to use a for loop to shift all other indices over.
 * - You allocate all memory up front; where as, with a linkedList, you only use the amount of memory per node.
 *
 *
 *
 * Linked List:
 * - If you want to retired an item, you have to traverse the list to find it always.
 * - Linear search is the only option of getting a value on a list.
 *
 *
 * Take away:
 * - If you need to scan a list or hop in to a list, or do random access, you'd want to use something more like an array.
 * - If you want to be able to push or pop from the tail, you'd want to use a list.
 * - I.e., Any queue of stack like needs.
 */
