// https://school.programmers.co.kr/learn/courses/30/lessons/12952

// 참고 자료 : https://ko.wikipedia.org/wiki/%EC%97%AC%EB%8D%9F_%ED%80%B8_%EB%AC%B8%EC%A0%9C

// 백트래킹으로 해결
function isSafe(row, col, queens) {
  for (let i = 0; i < queens.length; i++) {
    const [queenRow, queenCol] = queens[i];
    if (
      row === queenRow ||
      col === queenCol ||
      Math.abs(row - queenRow) === Math.abs(col - queenCol)
    ) {
      return false;
    }
  }
  return true;
}

function solveNQueens(n, row, queens, count) {
  if (row === n) {
    count[0]++;
    return;
  }

  for (let col = 0; col < n; col++) {
    if (isSafe(row, col, queens)) {
      queens.push([row, col]);
      solveNQueens(n, row + 1, queens, count);
      queens.pop();
    }
  }
}

function solution(n) {
  const count = [0];
  solveNQueens(n, 0, [], count);
  return count[0];
}

console.log(solution(4));
