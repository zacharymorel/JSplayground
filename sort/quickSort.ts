/**
 * Divide and conquer!
 *
 * Spilt your input in to subsets (chunks) and be able to go over things faster.
 *
 * [                        ] P will be the pivot?
 * 0                        N
 * WE have two pointers.
 * 1 that iterates over the entire array and checks to see if the current i is less than our pivot point. If so, we add it to our 2nd pointer.
 *
 * This is known as a weak sort
 * Pivot will be in the middle!
 * Everything to the left of the Pivot will be LESS THAN or equal too.
 * Everything to the right of the Pivot will be GREATER THAN the Pivot.
 *
 * WE DO THE SAME Process of the two subsets.
 * Pick new pivots in each subset and so on.
 * We do this until there is nothing left to sort.
 *
 * There will be a low and high side.
 * Think of this like a tree.
 * i.e.
 *                              array 32 size
 *                               0  -  32
 *                                  16 P
 *                         0-15              17-31
 *                          8p                 24
 *                   1-7          9-15
 *                    4p           12p
 *                 1-3 5-7      9-11    13-15
 *                  2   6        10       14
 *             1,1 3,3 5,5 7,7 9,9 11,11 13,13 15,15
 * BOTTOM PART means all those pieces are sorted, we have them all.
 *
 * Big O = 0(nlogn)
 *
 * which is n
 *          - = 1
 *          2k
 *
 * Condition where we can get the worst possible answer.
 * A reverse sorted array is the worse condition.
 * ALWAYS pick the middle element to prevent 0(n^2)
 */
