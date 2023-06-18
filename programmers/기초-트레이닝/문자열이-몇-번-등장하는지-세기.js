// https://school.programmers.co.kr/learn/courses/30/lessons/181871

function solution(myString, pat) {
  let count = 0;
  let index = myString.indexOf(pat);

  while (index !== -1) {
    count++;
    index = myString.indexOf(pat, index + 1);
  }

  return count;
}
