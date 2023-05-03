// https://school.programmers.co.kr/learn/courses/30/lessons/181927

function solution(num_list) {
  const len = num_list.length;
  num_list[len - 1] > num_list[len - 2]
    ? num_list.push(num_list[len - 1] - num_list[len - 2])
    : num_list.push(num_list[len - 1] * 2);
  return num_list;
}

/*---------------------------*/

function solution2(num_list) {
  const [a, b] = [...num_list].reverse();
  return [...num_list, a > b ? a - b : a * 2];
}

console.log(solution2([5, 2, 1, 7, 5]));
