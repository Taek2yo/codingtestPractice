// https://school.programmers.co.kr/learn/courses/30/lessons/42889

function solution(N, stages){
    let fail = [];
    let len = stages.length;
    for( let i = 1; i <= N; i++){
        let num = stages.filter(v=>v === i).length;
        fail.push([i,num / len]);
        len = len - num;
    }
    const answer = fail.sort((a,b)=>b[1]-a[1]);
    return answer.map(v=>v[0]);
}

console.log(solution(5,[2, 1, 2, 6, 2, 4, 3, 3]))