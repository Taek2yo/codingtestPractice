//https://school.programmers.co.kr/learn/courses/30/lessons/77484

function solution(lottos, win_nums) {
    var answer = [];
    let zero = 0;
    let match = 0;
    for (let num of lottos) {
        if (num === 0){
            zero++;
        }
        if (win_nums.includes(num)){
            match++;
        }
    }
    const maxRank = zero === 0 && match === 0 ? 6 : 7 - (zero+match);
    const minRank = match === 0 ? 6 : 7 - match;
    answer.push(maxRank,minRank) 
    return answer;
}

console.log(solution([44, 1, 0, 0, 31, 25],[31, 10, 45, 1, 6, 19]))