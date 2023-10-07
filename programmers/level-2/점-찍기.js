// https://school.programmers.co.kr/learn/courses/30/lessons/140107

function solution(k, d) {
  let count = 0;
  let x = 0;

  while (x * x <= d * d) {
    const y_squared = d * d - x * x;
    const y_max = Math.floor(Math.sqrt(y_squared));
    count += Math.floor(y_max / k) + 1;
    x += k;
  }

  return count;
}

console.log(solution(2, 4));

// x 좌표를 0부터 시작해서 하나씩 증가시키면서 원점과의 거리를 계산 , x * x는 현재 x 좌표에서 원점까지의 거리의 제곱을 의미
// 각 x 좌표에 대해, 원점과의 거리의 제곱을 d * d - x * x로 계산, 이 값은 현재 x 좌표에서 y 좌표까지의 거리의 제곱을 나타낸다.
// y_squared 값을 이용하여 현재 x 좌표에서 가능한 y 좌표의 최댓값을 계산하고, 최댓값은 루트를 씌워서 얻을 수 있다. 
// y 좌표를 k의 배수로 증가시키면서 원점과의 거리를 계산하고, count 변수에는 현재 x 좌표에서 가능한 k의 배수로 이동할 수 있는 횟수를 더한다
// 이렇게 하면 현재 x 좌표에서 가능한 점의 개수가 계산됨.
// x 좌표를 증가시키면서 위의 과정을 반복.
// 최종적으로 count 변수에는 주어진 k와 d 값으로 가능한 모든 점의 개수가 누적되고 이 값을 반환하면 됨.
