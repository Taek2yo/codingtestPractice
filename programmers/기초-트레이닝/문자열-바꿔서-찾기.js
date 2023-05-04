// https://school.programmers.co.kr/learn/courses/30/lessons/181864

function solution(myString, pat) {
  myString = myString
    .replaceAll("A", "C")
    .replaceAll("B", "A")
    .replaceAll("C", "B");
  return myString.includes(pat) ? 1 : 0;
}

function solution2(myString, pat) {
  return [...myString]
    .map((v) => (v === "A" ? "B" : "A"))
    .join("")
    .includes(pat)
    ? 1
    : 0;
}

console.log(solution2("ABBAA", "AABB"));
