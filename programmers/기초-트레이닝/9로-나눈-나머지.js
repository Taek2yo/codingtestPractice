// https://school.programmers.co.kr/learn/courses/30/lessons/181914

function solution(number) {
  return [...number].reduce((a, c) => a + +c) % 9;
}

console.log(solution("78720646226947352489"));

function solution(number) {
  let sum = 0;
  for (let i = 0; i < number.length; i++) sum += +number[i];

  return sum % 9;
}
