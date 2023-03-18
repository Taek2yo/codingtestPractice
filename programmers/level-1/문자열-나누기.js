// https://school.programmers.co.kr/learn/courses/30/lessons/140108

function solution(s) {
  let answer = 0;
  let str = "";
  let a = 0;
  let b = 0;

  for (let c of s) {
    if (!str) str = c;
    if (str === c) a++;
    else b++;

    if (a === b) {
      answer++;
      a = 0;
      b = 0;
      str = "";
    }
  }
  if (str) answer++;
  return answer;
}

console.log(solution("banana"));
