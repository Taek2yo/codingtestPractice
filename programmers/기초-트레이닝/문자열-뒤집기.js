// https://school.programmers.co.kr/learn/courses/30/lessons/181905

function solution(my_string, s, e) {
    let answer = '';
    let str = my_string.substring(s,e+1);
    let newStr = str.split('').reverse().join('');

    answer = my_string.replace(str,newStr);
    return answer;
}

console.log(solution("Progra21Sremm3", 6, 12));
