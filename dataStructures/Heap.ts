/**
 * Heap or sometimes called Priority Queue.
 * Simplest way to put it is a binary tree where every child and grand child is smaller
 *  (MaxHeap), or larger (MinHeap) than the current node.
 *
 * Conditions:
 *  Whenever a node is added, we must adjust the tree.
 *  Whenever a node is deleted, we must adjust the tree.
 *  There is no traversing the tree.
 *
 * Heaps maintain a WEAK ordering. I.e.,
 *
 *                              50
 *                        71            100
 *                     101  80        200  101
 *
 *
 *
 * Heaps are always full. They are never orphaned leafs.
 *
 * MIN-HEAPS
 * INSERT
 *  In the example where we need to insert, we start from the bottom of the leafs and bubble up to
 *  we reach the highest first node that we are smaller than. Each node will will have to shift as we insert in place.
 *
 * DELETE
 *  When we delete, we put the last node up in place of the one we deleted.
 *  Then we heap-ify down and check each node to see if our node is greater, if it is,
 *  we move that node down until we can't. This bubbles all over nodes back up that were smaller.
 *
 */
