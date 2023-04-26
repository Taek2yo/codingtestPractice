// https://school.programmers.co.kr/learn/courses/30/lessons/181879

function solution(num_list) {
  return num_list.length > 10
    ? num_list.reduce((a, c) => a + c)
    : num_list.reduce((a, c) => a * c);
}

console.log(solution([3, 4, 5, 2, 5, 4, 6, 7, 3, 7, 2, 2, 1]));
