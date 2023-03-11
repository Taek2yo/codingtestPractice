// https://school.programmers.co.kr/learn/courses/30/lessons/138477
function solution(k, score) {
  const honor = [];

  const result = [];

  for (let i = 0; i < score.length; i++) {
    if (i < k) {
      honor.push(score[i]);
    }

    if (score[i] > Math.min(...honor)) {
      honor.pop();
      honor.push(score[i]);
      honor.sort((a, b) => b - a);
    }

    result.push(honor.at(-1));
  }
  return result;
}


console.log(solution(3,[10, 100, 20, 150, 1, 100, 200]))