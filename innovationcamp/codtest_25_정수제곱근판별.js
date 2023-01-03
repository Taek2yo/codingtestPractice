// n = x2 ? (x+1)2 ; -1
// -> n이 x의 제곱이라면 x+1의 값을 제곱하여 출력, 아니라면 -1
function solution(n){
    return Math.sqrt(n) % 1 === 0 ? Math.pow(Math.sqrt(n)+1,2) : -1 ;           // Math.pow(밑,지수)
    // 정수 판별 -> 정수는 1로 나누었을 경우 항상 나머지가 0
}


console.log(solution(4))