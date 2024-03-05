/**
 * Given two crystal balls that will break from a high enough distance,
 * determine the exact spot in which it will break in the most optimized way.
 *
 * This is the case where the array is false all the way up to a point where it will
 * be true!
 * [false, false, false, false, true, true, true]
 *
 * In Binary we cut the space in half, but in this case, we are jumping.
 * We jump the SQUARE ROOT of n until it breaks.
 *
 * PLAIN SPEAK:
 * 1. We jump through the array square root of N times by the square root.
 * 2. Once we find the place where the 1st crystal ball breaks, we walk back square
 * root of n once and find the place where the 2nd ball wil break.
 * 3. Takes in array and return index.
 *
 * This is better than Linear time and Binary because Linear is linear and too long.
 * Binary won't work because once you find the spot where the 1st ball breaks,
 * lo could be the very beginning, so wou have to linearly walk all the way up.
 *
 * Square root gives you maximum amount of running distance one can jump.
 *
 * Big O = squrt(n)
 *
 * Example https://github.com/zacharymorel/kata-machine/blob/811dfaebb13b17a5d62681d55be80776d46cad76/src/day1/TwoCrystalBalls.ts
 */
