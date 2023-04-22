// https://school.programmers.co.kr/learn/courses/30/lessons/17677

function solution(str1, str2) {
  let A = [], B = [], count = 0;

  str1 = str1.toLowerCase();
  str2 = str2.toLowerCase();

  for (let i = 1; i < str1.length; i++)
    if (
      str1[i - 1] >= "a" &&
      str1[i - 1] <= "z" &&
      str1[i] >= "a" &&
      str1[i] <= "z"
    )
    A.push(str1[i - 1] + str1[i]);

  for (let i = 1; i < str2.length; i++)
    if (
      str2[i - 1] >= "a" &&
      str2[i - 1] <= "z" &&
      str2[i] >= "a" &&
      str2[i] <= "z"
    )
      B.push(str2[i - 1] + str2[i]);

  // 교집합
  for (let i = 0; i < A.length; i++) {
    const tmp = A[i];

    for (let j = 0; j < B.length; j++) {
      if (tmp === B[j]) {
        count++;
        B[j] = ".";
        break;
      }
    }
  }

  const union = A.length + B.length - count;

  return union === count ? 65536 : Math.floor((count / union) * 65536);
}

console.log(solution("FRANCE","french"))