//정수 num1과 num2가 매개변수로 주어집니다. 두 수가 같으면 1 다르면 -1을 retrun하도록 solution 함수를 완성해주세요.

const solution = (num1, num2) =>{
    let result;
    if (num1 == num2) {
        result = 1
    } else {
        result = -1
    }
    return result
}
// 풀고 난 뒤에 피드백 => 삼항연산자로 줄이기..

function solution2(num1, num2) {
    var answer = num1 === num2 ? 1 : -1;
    return answer;
}