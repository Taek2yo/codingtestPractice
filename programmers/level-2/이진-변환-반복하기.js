// https://school.programmers.co.kr/learn/courses/30/lessons/70129

function solution(s) {
  let answer = [0, 0];
  while (s.length > 1) {
    answer[0]++;
    answer[1] += (s.match(/0/g) || []).length;
    s = s.replace(/0/g, "").length.toString(2);
  }
  return answer;
}

console.log(solution("110010101001"));

/* let c = s.replace(/0/g,'').length;
return c.toString(2) */
