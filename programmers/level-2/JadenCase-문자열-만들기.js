// https://school.programmers.co.kr/learn/courses/30/lessons/12951

function solution(s){
    return s.toLowerCase().split(" ").map((v)=>v.charAt(0).toUpperCase() + v.substring(1)).join(" ")
}

console.log(solution("3people unFollowed me"))

// 반복문
function solution2(s){
    let answer = "";
    for ( let i = 0 ; i < s.length; i++){
        if( i === 0 || s[i-1] === " "){
            answer += s[i].toUpperCase();
        } else {
            answer += s[i].toLowerCase();
        }
    }
    return answer;
}

console.log(solution2("for the last week"))