// https://school.programmers.co.kr/learn/courses/30/lessons/12945

function solution(n){
    let fibo = [0,1];
    for ( let i = 2; i <= n; i++){
        fibo[i] = (fibo[i-1] + fibo[i-2]) % 1234567;
    }
    return fibo[n]
}

console.log(solution(3))