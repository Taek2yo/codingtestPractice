// https://school.programmers.co.kr/learn/courses/30/lessons/77885

function solution(numbers) {
  let answer = [];
  numbers.forEach((num) => {
    if (num < 2 || num % 2 === 0) answer.push(num + 1);
    else {
      let min = 2;
      while ((num + 1) % (min * 2) === 0) min *= 2;
      answer.push(num + min / 2);
    }
  });
  return answer;
}

console.log(solution([2, 7]));


/* 
1. 주어진 배열 numbers를 각각의 숫자 num에 대해 반복 처리.

2. 짝수이거나 num이 2보다 작은 경우
해당 숫자에 1을 더한 값을 결과 배열에 추가. 짝수인 경우 다음 숫자가 비트 하나만 변하므로, 가장 작은 다음 숫자는 해당 짝수에 1을 더한 값.

3. 홀수인 경우
최소값 min을 2로 초기화.
(num + 1)을 min의 2배로 나눈 나머지가 0일 동안에, min 값을 2배씩 증가시키는 과정을 반복. 다음 숫자가 num보다 크면서 1~2개의 다른 비트를 가지도록.

현재 숫자 num에 min의 절반 값을 더한 값을 결과 배열에 추가. */