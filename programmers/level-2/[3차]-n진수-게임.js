// https://school.programmers.co.kr/learn/courses/30/lessons/17687

function solution(n, t, m, p) {
  let str = "";
  for (let i = 0; str.length < m * t; i++) {
    str += i.toString(n).toUpperCase();
  }

  let answer = "";
  let count = 0;
  while (answer.length < t) {
    const s = str.substring(count, count + m);
    answer += s[p - 1];
    count += m;
  }
  return answer;
}

console.log(solution(2, 4, 2, 1));
console.log(solution(16, 16, 2, 1));
console.log(solution(16, 16, 2, 2));
