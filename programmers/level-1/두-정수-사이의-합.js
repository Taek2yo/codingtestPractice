// 두 정수 a, b가 주어졌을 때 a와 b 사이에 속한 모든 정수의 합을 리턴하는 함수, solution을 완성하세요.
// 예를 들어 a = 3, b = 5인 경우, 3 + 4 + 5 = 12이므로 12를 리턴합니다.

function solution(a, b) {
  let answer = 0;
  const min = Math.min(a, b);
  const max = Math.max(a, b);
  for (let i = min; i <= max; i++) {
    answer += i;
  }
  return answer;
}

function solution2(a, b) {
  // 양 끝항의 합 * 개수
  return ((a + b) * (Math.abs(a - b) + 1)) / 2;
}

console.log(solution(5, 3));
