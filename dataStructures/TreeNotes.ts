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
 */
