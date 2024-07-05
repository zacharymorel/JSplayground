/*
    What is Dijkstra's shortest path?
    - Calculates the shortest path from one node to all other nodes in the graph.
    - We can use it to find the shortest path to 1 specific point.
    - We'll be using BFS for to find the shortest path.
    - The Alog requires a previous array?
    - There are a bunch of variations of the algo. 
    - The weights on the edges cannot be negative, it will screw up the algo.
    - 

    - We have: 
    prev array (we know from whom I came from) [-1...]
    seen array: array of things we've seen [false...]
    distanceArray filled with expect of our source which will be 0. [infinity]

    1. We get the nearest unvisited node. 
    2. While unvisited() is true, we walk through the nodes and compare our seen and distance arrays above.
    3. You need to scan them all to find the minimal one unseen (minimal as in distance edge weigh)
    
    hasUnvisited() {
        lo = getLowestOneUnseen()
        seen[lo] = true

        // walk through it's children and find the shortest distance to the source node or current node.
        for edge in lo {
            if seen[edge] continue
            dist = dists[lo] + edge.weight
            if dist < dists[edge] {
                prev[edge] = lo
                dists[edge] = dist
            }
        }
    }


    Algo in plain terms:
    We keep getting the lowest distance node, and then we try to update all the other distances based on the new lowest path we found.
    
    Running time of Djkstras Shortest Path
    O(V) we store arrays for seen, prev and distances
    O(V^2) While loop to go through each node to check each edge AND we have to check to see if those nodes have been visited.
    O(V^2 + E) Go through height (or vertical) of graph twice and add the edges we check. 

    If you use a min heap instead of an array for the underlying data structures, we can remove the node seen for the heap and it becomes much quicker to check the nodes + edges. 

    
    Graph Questions in interviews that might come up:
    [
        [0 1 0 0 0 0 1]
        [0 0 0 0 0 1 1]
        [0 0 0 0 0 0 1]
        [0 0 0 0 0 0 0]
    ]

    Given the above graph, find how many islands there are in on the map. 
    Continues 1's with 0's on them are an island. So using a BFS or DFS would yeld 2 islands. 
    You would search through them, keep track of what you've seen and 
*/
