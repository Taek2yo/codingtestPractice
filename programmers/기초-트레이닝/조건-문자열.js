// https://school.programmers.co.kr/learn/courses/30/lessons/181934

function solution(ineq, eq, n, m) {
  if (ineq === ">") {
    if (eq === "=") m += 1;

    return n > m ? 1 : 0;
  } else {
    if (eq === "=") n += 1;

    return n < m ? 1 : 0;
  }
}

console.log(solution("<", "=", 20, 50));
