// https://school.programmers.co.kr/learn/courses/30/lessons/42577

function solution(phone_book) {
  let answer = true;
  let hash_map = {};

  for (let i = 0; i < phone_book.length; i++) {
    hash_map[phone_book[i]] = 1;
  }

  for (let i = 0; i < phone_book.length; i++) {
    let temp = "";
    for (let j = 0; j < phone_book[i].length; j++) {
      temp += phone_book[i][j];
      if (hash_map[temp] && temp !== phone_book[i]) {
        answer = false;
      }
    }
  }

  return answer;
}

console.log(solution(["119", "97674223", "1195524421"]))