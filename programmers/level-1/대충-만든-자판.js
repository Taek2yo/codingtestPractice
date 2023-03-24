// https://school.programmers.co.kr/learn/courses/30/lessons/160586

function solution(keymap, targets) {
    let answer = [];
    for ( let i of targets){
        let sum = 0;
        for ( let j of i ){
            let indexArr = keymap.map((v)=> [...v].indexOf(j) + 1 || Infinity);
            sum += Math.min(...indexArr)
        }
        sum = sum === Infinity ? -1 : sum ;
        answer.push(sum) 
    }
    return answer.includes(Infinity) ? -1 : answer;
}

console.log(solution(["ABACD", "BCEFD"],["ABCD","AABB"]))
