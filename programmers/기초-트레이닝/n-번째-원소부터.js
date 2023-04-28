// https://school.programmers.co.kr/learn/courses/30/lessons/181892

function solution(num_list, n) {
  let answer = [];
  for (let i = 0; i < num_list.length; i++) {
    if (i >= n - 1) {
      answer.push(num_list[i]);
    }
  }
  return answer;
}

// slice
function solution2(num_list, n) {
  return num_list.slice(n - 1);
}

console.log(solution2([5, 2, 1, 7, 5], 2));
