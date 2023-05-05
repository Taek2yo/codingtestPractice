// https://school.programmers.co.kr/learn/courses/30/lessons/181875

function solution(strArr){
    return strArr.map((v,i)=> i  % 2 === 0 ? v.toLowerCase() : v.toUpperCase())
}

console.log(solution(["AAA","BBB","CCC","DDD"]))