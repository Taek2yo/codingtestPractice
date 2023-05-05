// https://school.programmers.co.kr/learn/courses/30/lessons/181906

function solution(my_string, is_prefix) {
  if (my_string.length < is_prefix) return 0;
  for (let i = 0; i < is_prefix.length; i++) {
    if (my_string[i] !== is_prefix[i]) {
      return 0;
    }
  }
  return 1;
}

console.log(solution("banana", "ban"));
