// https://school.programmers.co.kr/learn/courses/30/lessons/181854

function solution(arr, n) {
  for (let i = 0; i < arr.length; i++) {
    if (arr.length % 2 !== i % 2) {
      arr[i] += n;
    }
  }
  return arr;
}

function solution2(arr, n){
    return arr.map((v,i) => arr.length % 2 !== i % 2 ? v + n : v)
}

console.log(solution([49, 12, 100, 276, 33], 27));
