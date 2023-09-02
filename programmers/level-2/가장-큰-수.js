// https://school.programmers.co.kr/learn/courses/30/lessons/42746

function solution(numbers) {
  function compare(x, y) {
    return x + y > y + x ? -1 : 1;
  }

  numbers = numbers.map(String).sort(compare);

  const answer = numbers.join("");

  return answer[0] === "0" ? "0" : answer;
}

console.log(solution([6, 10, 2]));
