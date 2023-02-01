// 문자열 my_string이 매개변수로 주어집니다. my_string은 소문자, 대문자, 자연수로만 구성되어있습니다. my_string안의 자연수들의 합을 return하도록 solution 함수를 완성해주세요.

function solution(my_string){
    const answer = my_string.match(/[0-9]+/g)
    return answer ? answer.map(Number).reduce((a,c)=>a+c, 0) : 0;
}

console.log(solution("aAb1B2cC34oOp"))