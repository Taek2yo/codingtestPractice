// https://school.programmers.co.kr/learn/courses/30/lessons/142086

function solution(s) {
  let answer = [];
  const map = new Map();
  [...s].map((v, i) => {
    if (!map.has(v)) answer.push(-1);
    else answer.push(i - map.get(v));
    map.set(v, i);
  });
  return answer;
}

console.log(solution("banana"));
