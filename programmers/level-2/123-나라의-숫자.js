// https://school.programmers.co.kr/learn/courses/30/lessons/12899

function solution(n) {
  let answer = "";

  while (n > 0) {
    if (n % 3 === 0) {
      answer = "4" + answer;
      n = n / 3 - 1;
    } else {
      answer = (n % 3) + answer;
      n = Math.floor(n / 3);
    }
  }

  return answer;
}

console.log(solution(1));
