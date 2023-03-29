// https://school.programmers.co.kr/learn/courses/30/lessons/12939

function solution(s){
   const arr = s.split(" ");
   return Math.min(...arr) + ' ' + Math.max(...arr);
}

console.log(solution("1 2 3 4"))