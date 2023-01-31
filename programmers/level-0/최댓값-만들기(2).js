// 정수 배열 numbers가 매개변수로 주어집니다. numbers의 원소 중 두 개를 곱해 만들 수 있는 최댓값을 return하도록 solution 함수를 완성해주세요.

function solution(numbers) {
  const arr = [...numbers].sort((a, b) => b - a);
  const max = arr[0] * arr[1];
  const min = arr[numbers.length -1] * arr[numbers.length -2];
  return max > min ? max : min;
}

console.log(solution([1, 2, -3, 4, -5]));
