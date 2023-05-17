// https://school.programmers.co.kr/learn/courses/30/lessons/181919

function solution(n) {
  let answer = [n];
  while (n != 1) {
    n % 2 === 0 ? (n = n / 2) : (n = n * 3 + 1);
    answer.push(n)
  }
  return answer;
}

console.log(solution(10));
