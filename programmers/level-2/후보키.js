// 2019 KAKAO BLIND RECRUITMENT
// https://school.programmers.co.kr/learn/courses/30/lessons/42890

function solution(relation) {
  const cols = relation[0].length;
  const rows = relation.length;
  const sets = new Set();

  for (let i = 1; i < 1 << cols; i++) {
    const tempSet = new Set();

    for (let row = 0; row < rows; row++) {
      let key = "";
      for (let col = 0; col < cols; col++) {
        if (i & (1 << col)) {
          key += relation[row][col];
        }
      }
      tempSet.add(key);
    }

    if (tempSet.size === rows) {
      let isMinimal = true;

      sets.forEach((candidateKey) => {
        if ((candidateKey & i) === candidateKey) {
          isMinimal = false;
        }
      });

      if (isMinimal) sets.add(i);
    }
  }

  return sets.size;
}

console.log(
  solution([
    ["100", "ryan", "music", "2"],
    ["200", "apeach", "math", "2"],
    ["300", "tube", "computer", "3"],
    ["400", "con", "computer", "4"],
    ["500", "muzi", "music", "3"],
    ["600", "apeach", "music", "2"],
  ])
);
