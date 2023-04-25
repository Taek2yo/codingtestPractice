// https://school.programmers.co.kr/learn/courses/30/lessons/181835

function solution2(arr, k){
    return arr.map((v) => k % 2 ? v * k : v + k)
}

console.log(solution2([1, 2, 3, 100, 99, 98],3))