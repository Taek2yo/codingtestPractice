// https://school.programmers.co.kr/learn/courses/30/lessons/181917

function solution(my_string, m, c) {
    let arr = [];
    for ( let i = 0; i < my_string.length; i+= m){
        let chunk = my_string.slice(i, i+m)
        arr.push(chunk)
    }
    let answer = arr.map((v) => v.charAt(c-1))
    return answer.join('');
}

console.log(solution("ihrhbakrfpndopljhygc"	,4,2))


// 간단하게 줄여보자
// 문자열을 한 줄에 m 글자씩 자르는 대신 문자열을 c번째 글자마다 분리하여 처리
function solution2(my_string, m, c) {
    let answer = "";
    // m 과 my_string의 길이가 일치하는 경우 예외 처리
    if (m === my_string.length) {
      return my_string.charAt(c - 1);
    }
  
    for (let i = c - 1; i < my_string.length; i += m) {
      answer += my_string.charAt(i);
    }
  
    return answer;
  }
  