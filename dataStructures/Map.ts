/**
 * What is a Map or HashMap?
 *
 * load factor: The amount of data points vs the amount of storage (data.len / storage.capacity) (So if we have 7 items in our map and a storage or 10, we'd have a load factor of 0.7)
 * key: A value that is "hashable" and is used to look up data. The hash has to be consistent.
 * value: a value that is associated with a key.
 * collision: when 2 keys map to the same cell.
 *
 * Foundational data structures are used often.
 * Map uses an arrayList.
 * MinHeap uses an arrayList.
 * DjkstrasShortestPath uses a Min Heap.
 * Queue uses Linked List.
 * Stack uses Array List
 * DFS uses a Stack.
 * BFS uses a queue.
 * Adjacency Matrix and Adjacency List both use an Array List.
 *
 *
 *
 * Hash Map needs what is called an "Consistent Hash" which means, given a the same Key, it will always return the same value.
 * Hash (k) => number
 *
 * We have a hash method that returns an index to store the K and the V.
 * We use that had method to both retrieve the index for GETTING and STORING the values needed.
 * After the hash index is returned, we can modulo the returned index by % 10 and store the value at that index.
 * If there are collisions, you can use a linked list or array list under the hood in the storage slot for that position. (This is known as chaining).
 *
 * We use an array list data structure under the hood for the HashMap. We increase the size of the array when we need to.
 *
 */
