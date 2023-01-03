function solution(a, b) {
    let answer = 0;
    let max = Math.max(a,b);    // a,b를 비교해서 최댓값 가져오기
    let min = Math.min(a,b);    // 최소값 가져오기
    for (let i = min; i <= max; i++) {
        answer += i
    }
    return answer;
}

console.log(solution(5,3))