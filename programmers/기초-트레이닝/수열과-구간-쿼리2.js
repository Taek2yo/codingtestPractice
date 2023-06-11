// https://school.programmers.co.kr/learn/courses/30/lessons/181923

function solution(arr, queries) {
  return queries.map(
    ([s, e, k]) =>
      arr
        .slice(s, e + 1)
        .filter((n) => n > k)
        .sort((a, b) => a - b)[0] || -1
  );
}

console.log(solution([0, 1, 2, 4, 3],[[0, 4, 2],[0, 3, 2],[0, 2, 2]]))