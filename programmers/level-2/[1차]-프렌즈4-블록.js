// https://school.programmers.co.kr/learn/courses/30/lessons/17679

function solution(m, n, board) {
  let boardMap = board.map((row) => row.split(""));
  let removedCount = 0;

  while (true) {
    const toRemove = new Set();

    for (let i = 0; i < m - 1; i++) {
      for (let j = 0; j < n - 1; j++) {
        if (
          boardMap[i][j] !== " " &&
          boardMap[i][j] === boardMap[i][j + 1] &&
          boardMap[i][j] === boardMap[i + 1][j] &&
          boardMap[i][j] === boardMap[i + 1][j + 1]
        ) {
          toRemove.add(`${i}-${j}`);
          toRemove.add(`${i}-${j + 1}`);
          toRemove.add(`${i + 1}-${j}`);
          toRemove.add(`${i + 1}-${j + 1}`);
        }
      }
    }

    if (toRemove.size === 0) {
      break;
    }

    toRemove.forEach((pos) => {
      const [row, col] = pos.split("-").map(Number);
      boardMap[row][col] = " ";
      removedCount++;
    });

    for (let j = 0; j < n; j++) {
      for (let i = m - 1; i >= 0; i--) {
        if (boardMap[i][j] === " ") {
          let dropRow = i;
          while (dropRow >= 0 && boardMap[dropRow][j] === " ") {
            dropRow--;
          }
          if (dropRow >= 0) {
            boardMap[i][j] = boardMap[dropRow][j];
            boardMap[dropRow][j] = " ";
          }
        }
      }
    }
  }
  return removedCount;
}

console.log(solution(4,5,["CCBDE", "AAADE", "AAABF", "CCBBF"]))