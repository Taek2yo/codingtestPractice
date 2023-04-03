// https://school.programmers.co.kr/learn/courses/30/lessons/12911

function solution(n){
    let countOne = n.toString(2).split("1").length;
    while (true){
        n++;
        if(n.toString(2).split("1").length === countOne)
        return n;
    }
}

console.log(solution(78))