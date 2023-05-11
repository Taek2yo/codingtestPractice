// https://school.programmers.co.kr/learn/courses/30/lessons/181909

function solution(my_string) {
    let arr = []
    for (let i = 0; i < my_string.length; i++) {
        arr.push(my_string.slice(i))
    }
    arr.sort()
    return arr
}

console.log(solution("banana"))