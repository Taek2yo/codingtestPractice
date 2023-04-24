// https://school.programmers.co.kr/learn/courses/30/lessons/181940

function solution(my_string, k){
    return my_string.repeat(k)
}

// 반복문으로 풀기

function solution2(my_string, k){
    let answer = '';
    for ( let i = 0; i <k ; i++){
        answer += my_string;
    }
    return answer;
}

console.log(solution2("string",3))