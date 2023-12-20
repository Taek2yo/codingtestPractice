// https://school.programmers.co.kr/learn/courses/30/lessons/12923

/*
제한 사항
1 ≤ begin ≤ end ≤ 1,000,000,000
end - begin ≤ 5,000
! 중요 : 도로의 길이는 최대 10억이지만 사용하는 블록의 최대 번호는 1천만 , 따라서 천만보다 작은 약수 중 가장 큰 값을 구해야한다.
 */

function getMaxDivisor(num) {
  let result = 1;
  for (let i = 2; i * i <= num; i++) {
    if (num % i === 0) {
      if (num / i <= 10000000) return num / i;
      result = i;
    }
  }
  return result;
}

function solution(begin, end) {
  const answer = [];

  for (let i = begin; i <= end; i++) {
    if (i === 1) answer.push(0);
    else answer.push(getMaxDivisor(i));
  }

  return answer;
}

console.log(solution(1, 10, [0, 1, 1, 2, 1, 3, 1, 4, 3, 5]));
