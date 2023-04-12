// https://school.programmers.co.kr/learn/courses/30/lessons/138476

function solution(k, tangerine) {
  const obj = {};
  // 같은 종류 확인
  tangerine.forEach((el) => {
    obj[el] = ++obj[el] || 1;
  });

  const values = Object.values(obj).sort((a, b) => b - a);

  let count = 0;
  
  for (let i = 0; i < values.length; i++) {
    count += values[i];
    if (count >= k) {
      return i ? i + 1 : 1;
    }
  }
}

console.log(solution(6, [1, 3, 2, 5, 4, 5, 2, 3]));
