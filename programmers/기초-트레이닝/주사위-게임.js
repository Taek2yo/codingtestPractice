// https://school.programmers.co.kr/learn/courses/30/lessons/181839

function solution(a, b) {
  if (a % 2 === 1 && b % 2 === 1) {
    return a * a + b * b;
  } else if (a % 2 === 1 || b % 2 === 1) {
    return 2 * (a + b);
  } else {
    return Math.abs(a - b);
  }
}

console.log(solution(2, 4));
