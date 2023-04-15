// https://school.programmers.co.kr/learn/courses/30/lessons/12949

function solution(arr1, arr2) {
  let result = [];
  for (let i = 0; i < arr1.length; i++) {
    let row = [];
    for (let j = 0; j < arr2[0].length; j++) {
      let sum = 0;
      for (let k = 0; k < arr2.length; k++) {
        sum += arr1[i][k] * arr2[k][j];
      }
      row.push(sum);
    }
    result.push(row);
  }
  return result;
}

console.log(solution([[1, 4], [3, 2], [4, 1]],[[3, 3], [3, 3]]));
