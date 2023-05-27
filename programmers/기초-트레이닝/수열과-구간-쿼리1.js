// https://school.programmers.co.kr/learn/courses/30/lessons/181883

function solution(arr, queries) {
  const result = [...arr];
  for (let i = 0; i < queries.length; i++) {
    const [s, e] = queries[i];

    for (let j = s; j <= e; j++) {
      result[j] += 1;
    }
  }

  return result;
}

console.log(
  solution(
    [0, 1, 2, 3, 4],
    [
      [0, 1],
      [1, 2],
      [2, 3],
    ]
  )
);
