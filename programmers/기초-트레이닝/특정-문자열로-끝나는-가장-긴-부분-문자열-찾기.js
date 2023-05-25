//https://school.programmers.co.kr/learn/courses/30/lessons/181872

function solution(myString, pat) {
   return myString.slice(0, myString.lastIndexOf(pat)+pat.length)
}
  

console.log(solution("AbCdEFG","dE"))
