// https://school.programmers.co.kr/learn/courses/30/lessons/1845

function solution(nums){
    let answer = [...new Set(nums)]
    let max = nums.length / 2;

    return answer.length > max ? max : answer.length;
}

console.log(solution([3,1,2,3]))