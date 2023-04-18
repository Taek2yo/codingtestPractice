// https://school.programmers.co.kr/learn/courses/30/lessons/64065

function solution(s) {
  const answer = [];
  s.slice(2, s.length - 2)
    .split("},{")
    .map((str) => str.split(",").map(Number))
    .sort((a, b) => a.length - b.length)
    .forEach((arr) => {
      arr.forEach((v) => {
        if (!answer.includes(v)) answer.push(v);
      });
    });
  return answer;
}

console.log(solution("{{2},{2,1},{2,1,3},{2,1,3,4}}"));
