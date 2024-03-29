// https://school.programmers.co.kr/learn/courses/30/lessons/72410

function solution(new_id){
    const answer = new_id
    .toLowerCase() 
    .replace(/[^\w-_.]/g, "") 
    .replace(/\.+/g, ".") 
    .replace(/^\.|\.$/g, "") 
    .replace(/^$/, "a")
    .slice(0, 15)
    .replace(/\.$/, "");
    const len = answer.length;
    return len > 2 ? answer : answer + answer.charAt(len - 1).repeat(3 - len);
}

console.log(solution("...!@BaT#*..y.abcdefghijklm"))