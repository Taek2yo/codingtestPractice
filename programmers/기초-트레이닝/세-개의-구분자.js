// https://school.programmers.co.kr/learn/courses/30/lessons/181862

function solution(myStr){
   let arr = myStr.split(/[abc]/).filter((el) => el != '')
   return arr.length > 0 ? arr : ["EMPTY"]
}

console.log(solution("cabab"))