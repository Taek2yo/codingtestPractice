// https://school.programmers.co.kr/learn/courses/30/lessons/12985

function solution(n, a, b) {
  let count = 1;
  while (Math.ceil(a / 2) !== Math.ceil(b / 2)) {
    a = Math.ceil(a / 2);
    b = Math.ceil(b / 2);
    count++;
  }

  return count;
}

console.log(solution(8,4,7))