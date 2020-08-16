/*
LeetCode: https://leetcode.com/problems/sudoku-solver/
Links: 1.) https://www.youtube.com/watch?v=Zq4upTEaQyM&list=PLiQ766zSC5jM2OKVr8sooOuGgZkvnOCTI&index=1
       2.) https://www.youtube.com/watch?v=JzONv5kaPJM&list=PLiQ766zSC5jM2OKVr8sooOuGgZkvnOCTI&index=16

Write a program to solve a Sudoku puzzle by filling the empty cells.
A sudoku solution must satisfy all of the following rules:

Each of the digits 1-9 must occur exactly once in each row.
Each of the digits 1-9 must occur exactly once in each column.
Each of the the digits 1-9 must occur exactly once in each of the 9 3x3 sub-boxes of the grid.
Empty cells are indicated by the character '.'.

A sudoku puzzle...
...and its solution numbers marked in red.

Note:
The given board contain only digits 1-9 and the character '.'.
You may assume that the given Sudoku puzzle will have a single unique solution.
The given board size is always 9x9.
*/

/**
 * @param {number[][]} board
 * @return {board} Do not return anything, modify board in-place instead.
 */
const solveSudoku = function(board) {
    return fillAllCells(0, 0, board);
};

function fillAllCells(row, col, board) {
    // Our Goal(Base Cases)
    if (col === board[row].length) {
        col = 0;
        row++;
        if (row === board.length)
            return board;
        else {
            // Skip cell if already filled out
            if (board[row][col] !== 0)
                return fillAllCells(row, col + 1, board);

            for (let value=0; value<board.length; value++) {
                if (canPlaceValue(board, row, col + 1, value)) {
                    board[row][col] = value;
                    fillAllCells(row, col + 1, board)
                }
                board[row][col] = 0;
            }

        }
    }
}

function canPlaceValue(board, row, col, valueToPlace) {

}

let board = [
    [5, 3, 0, 0, 7, 0, 0, 0, 0],
    [6, 0, 0, 1, 9, 5, 0, 0, 0],
    [0, 9, 8, 0, 0, 0, 0, 6, 0],
    [8, 0, 0, 0, 6, 0, 0, 0, 3],
    [4, 0, 0, 8, 0, 3, 0, 0, 1],
    [7, 0, 0, 0, 2, 0, 0, 0, 6],
    [0, 6, 0, 0, 0, 0, 2, 8, 0],
    [0, 0, 0, 4, 1, 9, 0, 0, 5],
    [0, 0, 0, 0, 8, 0, 0, 7, 9]
];
console.log(solveSudoku(board));