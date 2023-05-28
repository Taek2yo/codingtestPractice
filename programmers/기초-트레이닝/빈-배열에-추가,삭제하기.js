// https://school.programmers.co.kr/learn/courses/30/lessons/181860

function solution(arr, flag) {
  let answer = [];

  for (let i = 0; i < arr.length; i++) {
    if (flag[i]) {
      for (let j = 0; j < arr[i] * 2; j++) {
        answer.push(arr[i]);
      }
    } else {
      answer = answer.slice(0, answer.length - arr[i]);
    }
  }

  return answer;
}

console.log(solution([3, 2, 4, 1, 3], [true, false, true, false, false]));
