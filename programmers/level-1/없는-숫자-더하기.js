// 0부터 9까지의 숫자 중 일부가 들어있는 정수 배열 numbers가 매개변수로 주어집니다. 
// numbers에서 찾을 수 없는 0부터 9까지의 숫자를 모두 찾아 더한 수를 return 하도록 solution 함수를 완성해주세요.

function solution(numbers){
    return 45 - numbers.reduce((a,c)=>a+c)
}

// 숫자 제한 없는 경우 전체 합 구하면됨. 숫자 1~n까지 전체 합 => n(n+1) / 2