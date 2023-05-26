// https://school.programmers.co.kr/learn/courses/30/lessons/181838

function solution(d1, d2){
    let day1 = new Date(d1)
    let day2 = new Date(d2)
    return day1 < day2 ? 1 : 0;
}


console.log(solution([2021, 12, 28]	,[2021, 12, 29]))