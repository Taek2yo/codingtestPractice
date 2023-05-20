// https://school.programmers.co.kr/learn/courses/30/lessons/181931

function solution(a, d, included) {
  let sum = 0;

  for (let i = 0; i < included.length; i++) {
    if (included[i]) {
      sum += a + i * d;
    }
  }

  return sum;
}

//
const solution2 = (a, d, included) => {
  return included.reduce((acc, cur, idx) => (cur ? acc + a + d * idx : acc), 0);
};
console.log(solution2(3, 4, [true, false, false, true, true]));
