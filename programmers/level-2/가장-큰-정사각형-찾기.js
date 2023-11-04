// https://school.programmers.co.kr/learn/courses/30/lessons/12905

// DP
function solution(board) {
  let answer = 0;

  const dp = new Array(board.length)
    .fill(0)
    .map(() => new Array(board[0].length).fill(0));

  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[0].length; j++) {
      if (board[i][j] === 1) {
        if (i === 0 || j === 0) {
          dp[i][j] = 1;
        } else {
          dp[i][j] = Math.min(dp[i - 1][j], dp[i][j - 1], dp[i - 1][j - 1]) + 1;
        }

        answer = Math.max(answer, dp[i][j]);
      }
    }
  }

  return answer * answer;
}

console.log(
  solution([
    [0, 1, 1, 1],
    [1, 1, 1, 1],
    [1, 1, 1, 1],
    [0, 0, 1, 0],
  ])
);
