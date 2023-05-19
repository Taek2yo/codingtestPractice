// https://school.programmers.co.kr/learn/courses/30/lessons/181938

function solution(a,b){
    let A = `${a}` + `${b}`
    let B = 2 * a * b
    return Math.max(+A, B)  
}

console.log(solution(2,91))

