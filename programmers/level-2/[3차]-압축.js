// https://school.programmers.co.kr/learn/courses/30/lessons/17684

function solution(msg) {
    let dictionary = new Map();
    for (let i = 0; i < 26; i++) {
      const char = String.fromCharCode(65 + i);
      dictionary.set(char, i + 1);
    }
    let index = 27;
    let answer = [];
    for (let i = 0; i < msg.length; i++) {
      let current = msg[i];
      let next = msg[i + 1];
  
      while (dictionary.has(current + next) && i < msg.length - 1) {
        i++;
        current = current + next;
        next = msg[i + 1];
      }
  
      answer.push(dictionary.get(current));
  
      if (next) {
        dictionary.set(current + next, index);
        index++;
      }
    }
  
    return answer;
}
  
console.log(solution("KAKAO"))