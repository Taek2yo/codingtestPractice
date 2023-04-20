// https://school.programmers.co.kr/learn/courses/30/lessons/42586

function solution(progresses, speeds) {
  let answer = [];
  let days = progresses.map((v, i) => Math.ceil((100 - v) / speeds[i]));
  
  let standard = days[0];
  let count = 1;

  for ( let i = 1; i < days.length; i++){
    if ( days[i] <= standard){
        count++;
    } else {
        standard = days[i];
        answer.push(count);
        count = 1;
    }
  }
  answer.push(count);
  return answer;
}

console.log(solution([93, 30, 55], [1, 30, 5]));
