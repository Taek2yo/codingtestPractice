// https://school.programmers.co.kr/learn/courses/30/lessons/181890

function solution(arr) {
    for(let i = 0; i < arr.length; i++) {
        if (arr[i] === 'l') return arr.slice(0, i);
        if (arr[i] === 'r') return arr.slice(i + 1);
    }
    return [];
}
  

console.log(solution(["u", "u", "l", "r"]))