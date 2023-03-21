// https://school.programmers.co.kr/learn/courses/30/lessons/118666

function solution(survey, choices) {
  const object = {};
  const types = ["RT", "CF", "JM", "AN"];

  types.forEach((type) => {
    type.split("").forEach((v) => (object[v] = 0));
  });

  choices.forEach((choice, index) => {
    const [disagree, agree] = survey[index];

    object[choice > 4 ? agree : disagree] += Math.abs(choice - 4);
  });

  return types.map(([a, b]) => (object[b] > object[a] ? b : a)).join("");
}

console.log(solution(["AN", "CF", "MJ", "RT", "NA"], [5, 3, 2, 7, 5]));
