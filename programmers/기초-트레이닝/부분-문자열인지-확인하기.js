//https://school.programmers.co.kr/learn/courses/30/lessons/181843

function solution(my_string, target){
    return my_string.indexOf(target) != -1 ? 1 : 0;
}

// includes()
const solution2 = (my_string, target) => my_string.includes(target) ? 1 : 0;

console.log(solution2("banana","ana"))