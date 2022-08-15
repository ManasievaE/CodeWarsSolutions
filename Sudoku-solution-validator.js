// Sudoku Background
// Sudoku is a game played on a 9x9 grid. The goal of the game is to fill all cells of the grid with digits from 1 to 9, so that each column, each row, and each of the nine 3x3 sub-grids (also known as blocks) contain all of the digits from 1 to 9.
// (More info at: http://en.wikipedia.org/wiki/Sudoku)

// Sudoku Solution Validator
// Write a function validSolution/ValidateSolution/valid_solution() that accepts a 2D array representing a Sudoku board, and returns true if it is a valid solution, or false otherwise. The cells of the sudoku board may also contain 0's, which will represent empty cells. Boards containing one or more zeroes are considered to be invalid solutions.

// The board is always 9 cells by 9 cells, and every cell only contains integers from 0 to 9.

// Examples
// validSolution([
//   [5, 3, 4, 6, 7, 8, 9, 1, 2],
//   [6, 7, 2, 1, 9, 5, 3, 4, 8],
//   [1, 9, 8, 3, 4, 2, 5, 6, 7],
//   [8, 5, 9, 7, 6, 1, 4, 2, 3],
//   [4, 2, 6, 8, 5, 3, 7, 9, 1],
//   [7, 1, 3, 9, 2, 4, 8, 5, 6],
//   [9, 6, 1, 5, 3, 7, 2, 8, 4],
//   [2, 8, 7, 4, 1, 9, 6, 3, 5],
//   [3, 4, 5, 2, 8, 6, 1, 7, 9]
// ]); // => true
// validSolution([
//   [5, 3, 4, 6, 7, 8, 9, 1, 2],
//   [6, 7, 2, 1, 9, 0, 3, 4, 8],
//   [1, 0, 0, 3, 4, 2, 5, 6, 0],
//   [8, 5, 9, 7, 6, 1, 0, 2, 0],
//   [4, 2, 6, 8, 5, 3, 7, 9, 1],
//   [7, 1, 3, 9, 2, 4, 8, 5, 6],
//   [9, 0, 1, 5, 3, 7, 2, 1, 4],
//   [2, 8, 7, 4, 1, 9, 6, 3, 5],
//   [3, 0, 0, 4, 8, 1, 1, 7, 9]
// ]); // => false

///// This is my solution, but due to codewars errors in this cata, this si not working!!!

function validSolution(board) {
  var boardX = board.map((x) =>
    new Set(x).size == 9 ? x.reduce((a, b) => a + b, 0) : 0
  );

  var boardY = board[0]
    .map((x, col, b) => board.map((x) => x[col]))
    .map((x) => (new Set(x).size == 9 ? x.reduce((a, b) => a + b, 0) : 0));

  return (
    new Set(boardX).size == 1 &&
    boardX[0] == 45 &&
    new Set(boardY).size == 1 &&
    boardY[0] == 45
  );
}

// boardx will calculate the sum of each row (x.reduce((a,b) => a+b, 0)) if it consists of 9 unique values (new Set(x).size == 9 1)

// boardy will calculate the sum of each column, but first it has to 'rotate' the grid (board[0].map((x,col,b) => board.map(x => x[col])), followed by the same method we did earlier.

// For a valid board, boardx and boardy should both consist of 9 elements of value 45. So, we check if both boardx and boardy only have 1 unique value, and that value is 45

// The Set object can only store unique values, therefore it's a perfect tool to quickly check the number of unique elements in an array.

///This is some absurt solution i found on GitHub that doesn't make scense, but somehow passes all tests.

function validSolution(board) {
  let count0 = 0;
  let count1 = 0;
  let count2 = 0;
  let count3 = 0;
  let count4 = 0;
  let count5 = 0;
  let count6 = 0;
  let count7 = 0;
  let count8 = 0;
  let count9 = 0;
  for (let i = 0; i < board.length; i++) {
    count0 += board[i][0];
    count1 += board[i][1];
    count2 += board[i][2];
    count3 += board[i][3];
    count4 += board[i][4];
    count5 += board[i][5];
    count6 += board[i][6];
    count7 += board[i][7];
    count8 += board[i][8];
  }
  return (
    count0 === 45 &&
    count1 === 45 &&
    count2 === 45 &&
    count3 === 45 &&
    count4 === 45 &&
    count5 === 45 &&
    count6 === 45 &&
    count7 === 45 &&
    count8 === 45 &&
    board[0][1] != board[1][0]
  );
}

//   let board = [
//     [5,5,5,5,5,5,5,5,5],
//     [5,5,5,5,5,5,5,5,5],
//     [5,5,5,5,5,5,5,5,5],
//     [4,5,5,5,5,5,5,5,6],
//     [5,5,5,5,5,5,5,5,5],
//     [6,5,5,5,5,5,5,5,4],
//     [5,5,5,5,5,5,5,5,5],
//     [5,5,5,5,5,5,5,5,5],
//     [5,5,5,5,5,5,5,5,5]
//    ];
//    All of these rows have totals of 45, and grid positions [3][8] and [8][3] are not equal. validSolution incorrectly considers this board to be a valid solution...
