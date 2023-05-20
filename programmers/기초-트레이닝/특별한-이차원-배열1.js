// https://school.programmers.co.kr/learn/courses/30/lessons/181833

function solution(n) {
  let arr = [];

  for (let i = 0; i < n; i++) {
    let row = [];
    for (let j = 0; j < n; j++) {
      i === j ? row.push(1) : row.push(0);
    }
    arr.push(row);
  }

  return arr;
}
