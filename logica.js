export function gameStatus(board) {
    // Aux function to check if a player won
    const winLine = (player, c1, c2, c3) => (c1 === player && c2 === player && c3 === player)
  
    // Check if any player won
    for (let player = 1; player <= 2; player++) {
      if (
        winLine(player, board[0][0], board[0][1], board[0][2]) ||
        winLine(player, board[1][0], board[1][1], board[1][2]) ||
        winLine(player, board[2][0], board[2][1], board[2][2]) ||
        winLine(player, board[0][0], board[1][0], board[2][0]) ||
        winLine(player, board[0][1], board[1][1], board[2][1]) ||
        winLine(player, board[0][2], board[1][2], board[2][2]) ||
        winLine(player, board[0][0], board[1][1], board[2][2]) ||
        winLine(player, board[0][2], board[1][1], board[2][0])
      ) {
        return player
      }
    }
  
    // Check for empty cells
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        if (board[i][j] === 0) {
          return 0
        }
      }
    }
  
    // Draw
    return 3
  }
  
export function cpuPlayer(board) {
    // Function to check if there is a winning move for a specific player
    const canWin = (player, a, b, c) => {
      return (
        (board[a[0]][a[1]] === player && board[b[0]][b[1]] === player && board[c[0]][c[1]] === 0) ||
        (board[a[0]][a[1]] === player && board[c[0]][c[1]] === player && board[b[0]][b[1]] === 0) ||
        (board[b[0]][b[1]] === player && board[c[0]][c[1]] === player && board[a[0]][a[1]] === 0)
      );
    };
  
    // Possible line combinations to check
    const lines = [
      [[0, 0], [0, 1], [0, 2]],
      [[1, 0], [1, 1], [1, 2]],
      [[2, 0], [2, 1], [2, 2]],
      [[0, 0], [1, 0], [2, 0]],
      [[0, 1], [1, 1], [2, 1]],
      [[0, 2], [1, 2], [2, 2]],
      [[0, 0], [1, 1], [2, 2]],
      [[0, 2], [1, 1], [2, 0]],
    ];
  
    // Search for a move to block the player
    for (let line of lines) {
      if (canWin(1, ...line)) {
        for (let [i, j] of line) {
          if (board[i][j] === 0) {
            board[i][j] = 2;
            return;
          }
        }
      }
    }
  
    // Random move if no blocking move is found
    let emptyCells = [];
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        if (board[i][j] === 0) {
          emptyCells.push([i, j]);
        }
      }
    }
  
    if (emptyCells.length > 0) {
      const randomCell = emptyCells[Math.floor(Math.random() * emptyCells.length)];
      board[randomCell[0]][randomCell[1]] = 2;
    }
  }
  