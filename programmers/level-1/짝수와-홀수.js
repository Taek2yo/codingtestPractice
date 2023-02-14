// 정수 num이 짝수일 경우 "Even"을 반환하고 홀수인 경우 "Odd"를 반환하는 함수, solution을 완성해주세요.

function solution(num){
    return num % 2 === 0 ? "Even" : "Odd";
}

// === 0 줄이기 !
function solution2(num){
    // % 2 뒤에 없으면 == 1 생략이 되있다.
    return num % 2 ? "Odd" : "Even";
}
console.log(solution(3))