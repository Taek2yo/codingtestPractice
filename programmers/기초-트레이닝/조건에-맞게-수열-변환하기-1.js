// https://school.programmers.co.kr/learn/courses/30/lessons/181882

const solution = (a) =>
  a.map((v) =>
    v >= 50 && v % 2 == 0 ? v / 2 : v < 50 && v % 2 == 1 ? v * 2 : v
  );

console.log(solution([1, 2, 3, 100, 99, 98]));
