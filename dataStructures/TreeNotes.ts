/**
 * TERMS:
 *  Root - The most parent node.
 *  height - longest path from the root to the most childish node.
 *  binary - tree with @ max two children (Will have left and right properties).
 *  General Tree - 1 to many with a children array.
 *  Binary Search Tree - a with a specific ordering to it. A strong ordering.
 *  Leaves - Node without any more children.
 *  balanced - A tree within which all children/leaves are on the same level. It's perfectly balanced. All children have SAME height.
 *  branching factor - the amount of children a tree has. Binary tree has a branching factor of 2. A general tree has a branching factor of n.
 *
 *
 *
 * Traversals
 * Pre Order traversal
 * 1. VisitNode (do something with value of node)
 * 2. Then we recurse.
 *
 * In Order Traversal
 * Root is in the middle.
 *
 * Post Order traversal
 * We visit the node on the POST of the recursion.
 * Root is at the end.
 *
 *
 * Big O. Growth with respect of the input.
 * O(n)
 *
 * Special notes on memory.
 * In a BFS, we store half the entire tree that is about the current level in the current queue.
 *
 * SHOULD USE PROPER QUEUE (linked list) WHEN DOING BFS.
 *
 * Queue
 * Removing from the front O(1)
 * Adding to the back will be O(1).
 * Find is O(n)
 *
 * ArrayList is
 *  O(1) push and pop
 *  O(n) enqueue and dequeue.
 *  0(1) find
 *
 *
 * A DFS can use a Stack since it just push and pop to ArrayList which is O(1).
 *
 *
 * With both DFS and BFS we are already doing a O(n) due to the traversal of the tree. If we choose the wrong data structure during the traversal, it can be O(n^2). I.e., Using an ArrayList for a BFS.
 *
 *
 *
 * For Binary Trees that delete and need to be balanced, you can use Red-Black or AVL algorithms to do so.
 */
