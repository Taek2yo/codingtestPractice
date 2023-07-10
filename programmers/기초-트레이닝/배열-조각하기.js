// https://school.programmers.co.kr/learn/courses/30/lessons/181893

function solution(arr, query) {
  for (let i = 0; i < query.length; i++) {
    i % 2 ? arr.splice(0, query[i]) : arr.splice(query[i] + 1);
  }
  return arr;
}

console.log(solution([0,1,2,3,4,5], [4,1,2]))