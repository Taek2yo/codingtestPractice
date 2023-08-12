// https://school.programmers.co.kr/learn/courses/30/lessons/181926

// "w" : n이 1 커집니다.
// "s" : n이 1 작아집니다.
// "d" : n이 10 커집니다.
// "a" : n이 10 작아집니다.

function solution(n, control){
  let answer = n;
  const direction = {
    "w" : 1,
    "s" : -1,
    "d" : 10,
    "a" : -10,
  }
  control.split('').forEach((v)=> answer += direction[v])
  return answer;
}

console.log(solution(0, 'wsdawsdassw'))