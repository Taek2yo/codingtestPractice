// https://school.programmers.co.kr/learn/courses/30/lessons/181861

function solution(arr) {
  var answer = [];
  for (i = 0; i < arr.length; i++) {
    for (j = 0; j < arr[i]; j++) {
      answer.push(arr[i]);
    }
  }
  return answer;
}

console.log(solution([5, 1, 4]));

