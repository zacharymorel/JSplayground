/**
 * Important q:
 *
 * Is your data set ordered?
 *
 *
 * If it is ordered, you have new advantages you can take with that data.
 * We are going to half our view of the amount we would look at every time until
 * we get to 0. We check to see if current value is larger than or less than what
 * we are looking for.
 * We are always splitting it in half and traversing down one path of execution.
 *
 *
 * We don't scan anything, that would be N logN.
 *
 * 4096 is would be an arrayList length.
 * log 4096 = 12
 * 4096
 * 2048
 * 1024
 * 512
 * 256
 * 128
 * 64
 * 32
 * 16
 * 8
 * 4
 * 2
 * 1 ANSWER
 *
 * Big O = logN
 *
 *
 * Example on https://github.com/zacharymorel/kata-machine/blob/811dfaebb13b17a5d62681d55be80776d46cad76/src/day1/BinarySearchList.ts
 */
