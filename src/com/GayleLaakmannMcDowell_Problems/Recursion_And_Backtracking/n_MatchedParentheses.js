/*
Link: https://www.youtube.com/watch?v=sz1qaKt0KGQ&list=PLiQ766zSC5jM2OKVr8sooOuGgZkvnOCTI&index=9
Question: Write a program that takes as input a number n in and returns all the strings with n matched pairs of parens.
Examples:
n = 1
[ "()" ]

n = 2
[ "(())", "()()" ]

n = 3
[ "((()))","(()())","(())()","()(())","()()()" ]

Approach 1 (Brute Force Then Validate)
Generate all (2 ^ (2n)) possible parentheses strings and then validate each for being balanced.
If n = 2 then the string length will be 2 times that since all open parentheses are matched by closed parentheses.
This lower bounds our time complexity.
Even if we restrict the enumeration to just sets with an equal number of left and right parentheses we will have choose(2k, k) strings to consider for validation.

Approach 2 (Directed Backtracking)
The 3 Keys To Backtracking

Our Choice:
Whether we place a left or right paren at a certain decision point in our recursion.

Our Constraints:
We can't place a right paren unless we have left parens to match against.

Our Goal:
Place all k left and all k right parens.

The Key

At each point of constructing the string of length 2k we make a choice.
We can place a "(" and recurse or we can place a ")" and recurse.
But we can't just do that placement, we need 2 critical pieces of information.

The amount of left parens left to place.
The amount of right parens left to place.

We have 2 critical rules at each placement step=>
We can place a left parentheses if we have more than 0 left to place.
We can only place a right parentheses if there are left parentheses that we can match against.

We know this is the case when we have less left parentheses to place than right parentheses to place.

Once we establish these constraints on our branching we know that when we have 0 of both parens to place that we are done, we have an answer in our base case.
*/

const generateParenthesis = n => {
    return n_MatchedParentheses(n, n, "", []);
};

function n_MatchedParentheses(open, close, string, list) {
    if (open === 0 && close === 0)
        list.push(string);
    else {
        if (open > 0)
            n_MatchedParentheses(open - 1, close, string + '(', list);
        if (close > 0 && open < close)
            n_MatchedParentheses(open, close - 1, string + ')', list);
    }
    return list;
}

console.log(generateParenthesis(2));