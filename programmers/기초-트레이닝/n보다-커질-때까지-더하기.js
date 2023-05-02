// https://school.programmers.co.kr/learn/courses/30/lessons/181884

function solution(numbers, n){
    let answer = 0;
    for ( let i = 0; i < numbers.length; i++){
        answer += numbers[i]
        if ( answer > n) break
    }
    return answer;
}

console.log(solution([34, 5, 71, 29, 100, 34],123))