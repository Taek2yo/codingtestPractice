// https://school.programmers.co.kr/learn/courses/30/lessons/181834

function solution(myString) {
    return [...myString].map((v) => v < 'l' ? 'l' : v).join('');
}

console.log(solution("abcdevwxyz"))