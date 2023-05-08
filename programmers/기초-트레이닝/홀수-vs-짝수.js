// https://school.programmers.co.kr/learn/courses/30/lessons/181887

function solution(num_list) {
  let odd = 0;
  let even = 0;

  for (let i = 0; i < num_list.length; i++) {
    if (i % 2 === 0) {
      odd += num_list[i];
    } else even += num_list[i];
  }

  return odd > even ? odd : even
}

console.log(solution([4, 2, 6, 1, 7, 6]));
