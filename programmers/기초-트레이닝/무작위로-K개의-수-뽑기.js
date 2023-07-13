//https://school.programmers.co.kr/learn/courses/30/lessons/181858

function solution(arr, k) {
  const set = new Set(arr);
  return set.size < k
    ? [...set, ...Array(k - set.size).fill(-1)]
    : [...set].slice(0, k);
}

console.log(solution([0, 1, 1, 2, 2, 3]	,3))