// https://school.programmers.co.kr/learn/courses/30/lessons/181836

function solution(picture, k) {
  let answer = [];
  picture.forEach((el) => {
    const repeat = [...el].map((el) => el.repeat(k)).join("");
    for (let i = 0; i < k; i++) {
      answer.push(repeat);
    }
  });
  return answer;
}
