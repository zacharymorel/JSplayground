/**
 * RING Buffer.
 *
 * Very similar to ArrayList; however, we are not using 0 as our head and length as our tail.
 *
 * [null, null, null, 1, 2, 3, 4, 5, 6, null, null, null]
 *                    ^              ^
 *                  Head            Tail
 *
 * This is a queue that runs around in a ring.
 * Whenever the tail and the head meet, we resize. Which means, we take the total length of the array and then add half on each end.
 * Then add each item in the correct order in the new array.
 *
 * A logger is a good example for a ring buffer.
 * -  Or a Pool of objects is another good example. You create an object,
 *  do stuff with it, then return that object with basic state. So there is no, memory issues.
 * - reuse of objects in memory.
 *
 */
