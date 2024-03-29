// https://school.programmers.co.kr/learn/courses/30/lessons/42888

function solution(record) {
  let answer = [];
  let newArr = record.map((v) => v.split(" "));
  let nickname = {};
  for (let i = 0; i < newArr.length; i++) {
    if (newArr[i].length === 3) {
      nickname[newArr[i][1]] = newArr[i][2];
    }
  }
  for (let i = 0; i < newArr.length; i++) {
    if (newArr[i][0] === "Enter") {
      answer.push(nickname[newArr[i][1]] + "님이 들어왔습니다.");
    } else if (newArr[i][0] === "Leave") {
      answer.push(nickname[newArr[i][1]] + "님이 나갔습니다.");
    }
  }
  return answer;
}
console.log(
  solution([
    "Enter uid1234 Muzi",
    "Enter uid4567 Prodo",
    "Leave uid1234",
    "Enter uid1234 Prodo",
    "Change uid4567 Ryan",
  ])
);
