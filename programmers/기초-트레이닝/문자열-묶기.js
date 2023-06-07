// https://school.programmers.co.kr/learn/courses/30/lessons/181855

function solution(strArr) {
  let answer = Array(31).fill(0);
  for (let s of strArr) answer[s.length]++;
  return Math.max(...answer);
}


console.log(solution(["a","bc","d","efg","hi"]))