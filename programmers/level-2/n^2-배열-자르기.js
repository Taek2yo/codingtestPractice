// https://school.programmers.co.kr/learn/courses/30/lessons/87390

function solution(n, left, right){
    const answer = [];

    for ( let i = left; i <= right; i++){
        const y = parseInt(i/n);
        const x = i % n;
        answer.push(Math.max(x,y) + 1)
    }

    return answer;
}

console.log(solution(3,2,5))