// https://school.programmers.co.kr/learn/courses/30/lessons/181829

function solution(board, k) {
  const m = board.length;
  const n = board[0].length;
  let total = 0;

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (i + j <= k) {
        total += board[i][j];
      }
    }
  }

  return total;
}
