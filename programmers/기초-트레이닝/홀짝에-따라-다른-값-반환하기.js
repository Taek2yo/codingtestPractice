// https://school.programmers.co.kr/learn/courses/30/lessons/181935

function solution(n) {
  let odd = 0;
  let even = 0;
  for (let i = n; i > 0; i--) {
    if (i % 2 === 0) {
      even += Math.pow(i, 2);
    } else {
      odd += i;
    }
  }
  return n % 2 === 1 ? odd : even;
}

console.log(solution(10));
