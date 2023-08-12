// https://school.programmers.co.kr/learn/courses/30/lessons/84512

function solution(word) {
  let answer = word.length;
  const alpha = "AEIOU";
  const max = [781, 156, 31, 6, 1];
  for (let i = 0; i < word.length; i++) {
    const index = alpha.indexOf(word[i]);
    answer += index * max[i];
  }
  return answer;
}

console.log(solution("AAAAE"));


// 다른 사람 풀이. 같은 접근이지만 reduce 생각 못한거 아쉬움.
// 각 자릿수에 대해 생기는 경우의 수가 첫 번째 배열이고 사전 순으로 나열되니까 앞에 있는 경우의 수 건너뛰려고 인덱스 곱해주고 중간에 'A' 문자가 한 번씩 끼니까 +1
const solution2 = (word) =>
  [...word].reduce(
    (a, c, i) => a + "AEIOU".indexOf(c) * Math.floor(781 / 5 ** i) + 1, 0);

console.log(solution2("AAAAE"));
