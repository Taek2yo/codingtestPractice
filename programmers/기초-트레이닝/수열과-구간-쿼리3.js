// https://school.programmers.co.kr/learn/courses/30/lessons/181924

function solution(arr, queries) {
    queries.forEach( ([a,b]) => {
        [arr[a],arr[b]] = [arr[b],arr[a]];
    })
    return arr;
}

console.log(solution([0, 1, 2, 3, 4],[[0, 3],[1, 2],[1, 4]]))