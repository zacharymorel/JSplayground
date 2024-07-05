/**
 * Least Recently Used:
 *
 * We will convicted the least recently used item.
 *
 * 1. We build some node container.
 * 2. We have a value and we want to store it.
 * 3. We have a linked list that points to other values.  V0 <=> V1 <=> V2 <=> V3.
 * 4. We need to be able to store the value in such a way that if the user wants V2, you can easily "pull out" V2.
 * 5. We need to take V2 and move it to the head of the Queue. V2 <=> V0 <=> V1 <=> V3
 *           V2 <=> V0 <=> V1 <=> V3
 *    Most recently used         Oldest used
 * 6. Doubly Linked List is the data structure we use.
 * 7. How did I ask for Value 2?
 * 8. Hash map can solve your issue for retrieving data at O(1).
 * 9. Hash map that is an array list with which is also a linked list BY the values of the hash map will store pointers to the "next in line" doubly linked list.
 *    As a result, we can look up the next and prev key's at O(1) as well as write as an O(1).
 * 10. We will need to store a head and tail. Pre and next.
 *
 *
 * It's the combination of two data structures together. A HashMap + Linked List.
 */
