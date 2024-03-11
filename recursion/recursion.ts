/**
 * Something that keeps calling itself until exit is specified.
 * JS has async recursion.
 *
 *
 * Functions need return address (where is my result stored when I return?)
 * Functions need arguments
 *
 *
 * Stack trace is the literal stack of functions drilled to point where the error occurred.
 */

function foo(n: number): number {
	console.log('pre recursing to base case n: ', n);
	// base case
	if (n <= 1) return n;

	const out = n + foo(n - 1); // < Recurse.
	console.log('post recurse (returning up the stack)  n: ', n, '| OUT: ', out);
	return out;
}

const res = foo(5);
console.log('RES: ', res);

/**
There are 3 steps. 
1. Checks base case. 
2. Recurse down and call functions n times until base case is met.
3. Once the base case is met, we then return EACH call up the stack. 

1. PRE: n +
2. Recurse: Call foo(n - 1);
3. post, we do something AFTER the recursion const out = n + ...; 

DOWN const out = n + foo(n - 1);
Call foo(5) n = 5 
Call foo(4) n = 4 
Call foo(3) n = 3 
Call foo(2) n = 2 
Call foo(1) n = 1

base case is 1 

UP const out = n + foo(n - 1);
	return out;
	   n  res from foo(n - 1);
return 1 + 2 = 3  
return 3 + 3 = 6
return 6 + 4 = 10
return 10 + 5 = 15 


WHAT PRINTS:
	n:  5
	n:  4
	n:  3
	n:  2
	n:  1
	OUT:  3
	OUT:  6
	OUT:  10
	OUT:  15
	RES:  15

Step 1 We drill down recursively.
Step 2 We move back up as we return the values of each function. 
function foo(5) {
	return 5 + foo(4) { 10 + 5 = 15
		return 4 + foo(3) { 4 + 6 = 10
			return 3 + foo(2) { 3 + 3 = 6
				return 2 + foo(1) {  1 + 2 = 3
					// MET BASE CASE
					return 1;
				}
			}
		}
	}
}
*/

// ANOTHER EXAMPLE

/**
 * Maze solver: Find the path that is clear from "S" or start to "E" or end.
 * [
 * 	"# # # # # E #",
 *  "# ->   -> ^ #",
 *  "# S # # # # #",
 * ]
 *
 * Base Case:
 * 1. it's a wall?
 * 2. off the map?
 * 3. its the end?
 * 4. have we see this?
 *
 * Recursive cases:
 * 1. Is it a direction I can go?
 */
