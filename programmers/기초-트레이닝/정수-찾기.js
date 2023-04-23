// https://school.programmers.co.kr/learn/courses/30/lessons/181840

function solution(num_list, n){
    return num_list.includes(n) ? 1 : 0;
}

console.log(solution([1, 2, 3, 4, 5],3))