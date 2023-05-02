// https://school.programmers.co.kr/learn/courses/30/lessons/181888

const solution = (num_list, n) => num_list.filter((el, i) => i % n === 0);

console.log(solution([4, 2, 6, 1, 7, 6], 2));
