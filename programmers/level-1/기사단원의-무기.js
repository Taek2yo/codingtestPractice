// https://school.programmers.co.kr/learn/courses/30/lessons/136798

const getDivisor = (num) => {
  let divisor = [];
  for (let i = 1; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      divisor.push(i);
      if (num / i != i) divisor.push(num / i);
    }
  }
  return divisor;
};

function solution(number, limit, power) {
  let arr = [];
  for (let i = 1; i <= number; i++) {
    const len = getDivisor(i).length > limit ? power : getDivisor(i).length;
    arr.push(len);
  }
  return arr.reduce((a, c) => a + c);
}

console.log(solution(5, 3, 2));
