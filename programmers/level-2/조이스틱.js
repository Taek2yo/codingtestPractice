// https://school.programmers.co.kr/learn/courses/30/lessons/42860

function solution(name) {
  let answer = 0;
  let min = name.length - 1;

  for (let i = 0; i < name.length; i++) {
    answer += Math.min(
      name.charCodeAt(i) - "A".charCodeAt(0),
      "Z".charCodeAt(0) - name.charCodeAt(i) + 1
    );

    let next = i + 1;
    while (next < name.length && name[next] === "A") {
      next++;
    }

    min = Math.min(
      min,
      2 * i + name.length - next,
      i + 2 * (name.length - next)
    );
  }

  answer += min;
  return answer;
}

console.log(solution("JAN",23))