// https://school.programmers.co.kr/learn/courses/30/lessons/42746

function solution(numbers) {
  numbers = numbers.map(String).sort((a, b) => (a + b > b + a ? -1 : 1));

  const answer = numbers.join("");

  return answer[0] === "0" ? "0" : answer;
}

console.log(solution([6, 10, 2]));