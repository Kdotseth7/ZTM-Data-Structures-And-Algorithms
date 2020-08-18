/*
Links: 1.) https://www.youtube.com/watch?v=xFv_Hl4B83A
       2.) https://www.youtube.com/watch?v=wGbuCyNpxIg&t=604s

The n-queens puzzle is the problem of placing n queens on an n×n chessboard such that no two queens attack each other.

Given an integer n, return all distinct solutions to the n-queens puzzle.
Each solution contains a distinct board configuration of the n-queens' placement, where 'Q' and '.' both indicate a queen
and an empty space respectively.

Example:
Input: 4
Output: [
 [".Q..",  // Solution 1
  "...Q",
  "Q...",
  "..Q."],

 ["..Q.",  // Solution 2
  "Q...",
  "...Q",
  ".Q.."]
]
Explanation: There exist two distinct solutions to the 4-queens puzzle as shown above.
*/

/**
 * @param {number} n
 * @return {string[][]}
 */

const solveNQueens = function(n) {
    const placementsList = colPlacementsList(n, 0, [], []);
    return placementsList.map(solution => drawResult(solution));
};

function colPlacementsList(n, row, colPlacementArray, list) {
    // Our Goal (Base Case)
    if (row === n)
        list.push(Array.from(colPlacementArray));
    else {
        for (let col=0; col<n; col++) {
            colPlacementArray.push(col); // Our Choice
            //Our Constraints
            if (isValidPlacement(colPlacementArray))
                colPlacementsList(n, row + 1, colPlacementArray, list);
            colPlacementArray.pop(); // Undo our choice, i.e., remove the Queen from colPlacementArray if Queen Placement is invalid
        }
    }
    return list;
}

const isValidPlacement = colPlacementArray => {
    let rowId = colPlacementArray.length - 1;
    if (colPlacementArray.length > 1) {
        for (let i=0; i<rowId; i++) {
            let diff = Math.abs(colPlacementArray[i] - colPlacementArray[rowId]);
            if (diff === 0 || diff === rowId - i)
                return false;
        }
    }
    return true;
};

function drawResult(sol) {
    const result = [];
    const n = sol.length;
    for (let r = 0; r < n; r++) {
        const row = [];
        for (let c = 0; c < n; c++) {
            row.push(c === sol[r] ? 'Q' : '.');
        }
        result.push(row.join(''));
    }
    return result;
}

console.log(solveNQueens(4));
