// https://school.programmers.co.kr/learn/courses/30/lessons/161989

function solution(n, m, section) {
  let answer = 1;
  let a = section[0];
  section.map((v) => {
    if (a + m - 1 < v) {
      a = v;
      return answer++;
    }
  });
  return answer;
}

console.log(solution(8, 4, [2, 3, 6]));
