const solution = (num1, num2) =>{
    let result;
    if (num1 == num2) {
        result = 1
    } else {
        result = -1
    }
    return result
}

console.log(solution(5,7))

// 풀고 난 뒤에 피드백..

// 삼항연산자 사용해서 줄였으면 더 짧아졌을듯

function solution(num1, num2) {
    var answer = num1 === num2 ? 1 : -1;
    return answer;
}