// https://school.programmers.co.kr/learn/courses/30/lessons/131128

function solution(X, Y) {
    let answer = ''
    for(let i = 0 ; i < 10 ; i ++) {
        const filterX = [...X].filter(v => Number(v) === i).length
        const filterY = [...Y].filter(v => Number(v) === i).length
        answer+=String(i).repeat(Math.min(filterX, filterY))
    }
    if(answer === '') return "-1"
    if(Number(answer) === 0) return "0"
    return [...answer].sort((a,b) => Number(b)-Number(a)).join("")
}

console.log(solution("100","203045"))