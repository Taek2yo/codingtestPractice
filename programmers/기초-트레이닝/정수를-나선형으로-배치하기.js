// https://school.programmers.co.kr/learn/courses/30/lessons/181832

function solution(n) {
    let answer = [];
    for (let i = 0; i < n; i++) {
      answer.push([]);
    }
  
    let count = 1;
    let startRow = 0;
    let endRow = n - 1;
    let startCol = 0;
    let endCol = n - 1;
  
    while (startRow <= endRow && startCol <= endCol) {
      // Top row
      for (let i = startCol; i <= endCol; i++) {
        answer[startRow][i] = count++;
      }
      startRow++;
  
      // Right column
      for (let i = startRow; i <= endRow; i++) {
        answer[i][endCol] = count++;
      }
      endCol--;
  
      // Bottom row
      for (let i = endCol; i >= startCol; i--) {
        answer[endRow][i] = count++;
      }
      endRow--;
  
      // Left column
      for (let i = endRow; i >= startRow; i--) {
        answer[i][startCol] = count++;
      }
      startCol++;
    }
  
    return answer;
  }

console.log(solution(4))