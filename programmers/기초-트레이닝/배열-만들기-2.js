// https://school.programmers.co.kr/learn/courses/30/lessons/181921

function solution(l, r) {
  const result = [];

  for (let i = l; i <= r; i++) {
    if (isZeroFive(i)) {
      result.push(i);
    }
  }

  return result.length > 0 ? result : [-1];
}

function isZeroFive(num) {
  const digits = String(num).split("");
  return digits.every((digit) => digit === "0" || digit === "5");
}
