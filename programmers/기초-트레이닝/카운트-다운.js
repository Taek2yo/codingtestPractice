// https://school.programmers.co.kr/learn/courses/30/lessons/181899

function solution(start, end){
    let answer = [];
    for ( let i = start; i >= end; i--){
        answer.push(i)
    }
    return answer;
}

console.log(solution(10,3))