// https://school.programmers.co.kr/learn/courses/30/lessons/181932

function solution(code) {
    let answer = '';
    let mode = 0;

    for (let i = 0; i < code.length; i += 1) {
      if (Number(code[i]) === 1) {
        mode = mode === 1 ? 0 : 1;
      }
      if (Number(code[i]) !== 1 && i % 2 === mode) {
        answer += code[i];
      }
    }
    return answer.length > 0 ? answer : 'EMPTY';
}