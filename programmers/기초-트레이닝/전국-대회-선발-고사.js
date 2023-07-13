//https://school.programmers.co.kr/learn/courses/30/lessons/181851

function solution(rank, attendance) {
  const arr = rank
    .map((v, i) => [v, i])
    .filter((v, i) => attendance[i] === true)
    .sort((a, b) => a[0] - b[0]);
  return 10000 * arr[0][1] + 100 * arr[1][1] + arr[2][1];
}

console.log(
  solution([3, 7, 2, 5, 4, 6, 1], [false, true, true, true, true, false, false])
);
