// https://school.programmers.co.kr/learn/courses/30/lessons/181874

function solution(myString) {
  return [...myString]
    .map((v) =>
      v === "a" || v === "A" ? v.replaceAll("a", "A") : v.toLowerCase()
    )
    .join("");
}

const solution2 = (myString) => myString.toLowerCase().replaceAll('a', 'A')

console.log(solution2("PrOgRaMmErS"));
