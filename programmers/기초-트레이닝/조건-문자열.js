// https://school.programmers.co.kr/learn/courses/30/lessons/181934

function solution(ineq, eq, n, m) {
  let result = 0;

  if (ineq === "<" && eq === "=") {
    result = (n <= m) ? 1 : 0;
  } else if (ineq === "<" && eq === "!") {
    result = (n < m) ? 1 : 0;
  } else if (ineq === ">" && eq === "=") {
    result = (n >= m) ? 1 : 0;
  } else if (ineq === ">" && eq === "!") {
    result = (n > m) ? 1 : 0;
  }

  return result;
}

console.log(solution("<", "=", 20, 50));
