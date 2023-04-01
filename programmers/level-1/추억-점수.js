// https://school.programmers.co.kr/learn/courses/30/lessons/176963

function solution(name, yearning, photo) {
  let obj = {};
  for (let i = 0; i < name.length; i++) {
    obj[name[i]] = yearning[i];
  }
  return photo.map((v) =>
    v.map((v) => (obj[v] ? obj[v] : 0)).reduce((a, c) => a + c, 0)
  );
}

// Map 활용
function solution2(name, yearning, photo) {
  const score = new Map();
  name.forEach((v, idx) => {
    score.set(v, yearning[idx]);
  });

  return photo.map((names) =>
    names.reduce((a, c) => a + (score.get(c) || 0), 0)
  );
}

console.log(
  solution(
    ["may", "kein", "kain", "radi"],
    [5, 10, 1, 3],
    [
      ["may", "kein", "kain", "radi"],
      ["may", "kein", "brin", "deny"],
      ["kon", "kain", "may", "coni"],
    ]
  )
);
