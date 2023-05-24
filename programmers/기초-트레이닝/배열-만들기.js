// https://school.programmers.co.kr/learn/courses/30/lessons/181912

function solution(intStrs, k, s, l) {
    return intStrs.map((str) => +str.substring(s, s + l)).filter((num) => k < num);
  }

console.log(
  solution(["0123456789", "9876543210", "9999999999999"], 50000, 5, 5)
);
