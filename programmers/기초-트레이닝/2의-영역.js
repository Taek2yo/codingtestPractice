// https://school.programmers.co.kr/learn/courses/30/lessons/181894

function solution(arr) {
    const from = arr.indexOf(2);
    const end = arr.lastIndexOf(2);

    return from === -1 ? [-1] : arr.slice(from, end+1);
}

  
console.log(solution([1, 2, 1, 4, 5, 2, 9]))