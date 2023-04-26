// https://school.programmers.co.kr/learn/courses/30/lessons/181849

function solution(num_str){
    return num_str.split('').reduce((a,c)=>a + Number(c),0)
}

console.log(solution("123456789"))