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
    }
*/
