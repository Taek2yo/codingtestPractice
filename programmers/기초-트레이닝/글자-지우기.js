// https://school.programmers.co.kr/learn/courses/30/lessons/181900

function solution(my_string, indices) {
  let result = "";
  for (let i = 0; i < my_string.length; i++) {
    if (!indices.includes(i)) {
      result += my_string[i];
    }
  }
  return result;
}

console.log(solution("apporoograpemmemprs", [1, 16, 6, 15, 0, 10, 11, 3]));
