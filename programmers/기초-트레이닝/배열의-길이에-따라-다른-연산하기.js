// https://school.programmers.co.kr/learn/courses/30/lessons/181854

function solution(arr, n) {
  for (let i = 0; i < arr.length; i++) {
    if (arr.length % 2 == 1 && i % 2 == 0) {
      arr[i] += n;
    }
    if (arr.length % 2 == 0 && i % 2 == 1) {
      arr[i] += n;
    }
  }
  return arr
}

function solution2(arr, n){
    return arr.map((v,i) => arr.length % 2 !== i % 2 ? v + n : v)
}

console.log(solution2([49, 12, 100, 276, 33], 27));
