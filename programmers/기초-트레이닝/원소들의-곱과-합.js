// https://school.programmers.co.kr/learn/courses/30/lessons/181929

function solution(num_list){
    let times = num_list.reduce((a,c)=>a*c);
    let sum = num_list.reduce((a,c)=>a+c);
    return times < sum ** 2 ? 1 : 0;
}

console.log(solution([3, 4, 5, 2, 1]))