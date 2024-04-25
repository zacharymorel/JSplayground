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
 */
