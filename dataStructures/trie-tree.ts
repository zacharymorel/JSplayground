/***
 * A Retrieval Tree
 *
 * The easiest way to think about a Trie tree is an autocomplete.
 *
 * Constant time lookup.
 *
 * Let's do an English language trie has an example.
 *
 *                  0
 *                 [26]  - children
 *                c    m
 *               a      a
 *             t   r   p  r
 *            s  t  d     k
 *               t  s
 *               l
 *               e
 *
 * Just uses dfs for find possible outcomes for autocomplete.
 * Children is N.
 *
 * What does the interview question look like for this:
 * "I have a list of words, and I want to build an autocomplete."
 * "Or I want a caching mechanism."
 *
 * */
