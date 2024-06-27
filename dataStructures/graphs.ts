/**
 * All trees are graphs.
 *
 * Graph Terms:
 *
 * cycle: When you start at Node(x), follow the links, and end back at Node(x)
 * acyclic: A graph that contains no cycles
 * connected: When every Node has a path to another node (Every node can reach every other node).
 * directed: When there is a direction to the connections. Think Twitter. Going a direction.
 * Undirected: !directed. Think Facebook. You can go both ways, no direction preference.
 * Weighted: The edges have a weight associated with them. Think Maps. Weight is associated between the traversal between two nodes. Going 1 direction could "weigh" more than going the other way.
 * dag: Directed Acyclic Graph
 *
 * Implementation Terms:
 * node: a point of vertex on the graph
 * edge: the connection between betxit(between) two nodes.
 *
 * Big O
 * V and E V stands for vertices (or nodes) and E stands for edges.
 * 0(V * E) means that we will check every vertex (node), and on every vertex we check every edge.
 *
 *
 * Two different ways to store graphs:
 * 1. Adjacency Matrix
 * 2. Adjacency List
 *
 * Pros and cons:
 * Adjacency Matrix problem is memory. You're storing 2D arrays where each array would have the indexs that it is related too.
 * Adjacency List is just a list that vertices that has a value and a list of connections.
 *
 * In graph theory and computer science, an Adjacency List is a collection of unordered lists used to represent a finite graph. Each unordered list within an adjacency list describes the set of neighbors of a particular vertex in the graph.
 *
 * In graph theory and computer science, an Adjacency Matrix is a square matrix used to represent a finite graph. The elements of the matrix indicate whether pairs of vertices are adjacent or not in the graph. In the special case of a finite simple graph, the adjacency matrix is a-matrix with zeros on its diagonal.
 *
 * Adjacency Matrix:
 * [
 *  [0  10  0  10  0   0],
 *  [10  0  0  0   0   0],
 *  [10  0  0  0   0   0],
 *  [0  10  5  0   0   0],
 * ]
 *
 *
 * Adjacency List:
 * [
 *  [
 *      { to: 1, w: 10 }
 *  ],
 *  [
 *      { to: 2, w: 10 },
 *      { to: 3, w: 5 }
 *  ],
 *  [],
 *  [
 *      { to: 0, w: 10 },
 *  ],
 * ]
 *
 *
 */
