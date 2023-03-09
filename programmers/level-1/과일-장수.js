// 사과의 최대 점수 k, 한 상자에 들어가는 사과의 수 m, 사과들의 점수 score가 주어졌을 때, 과일 장수가 얻을 수 있는 최대 이익을 return하는 solution 함수를 완성해주세요.

function solution(k, m, score){
    let answer = 0;
    const arr = score.sort((a,b)=>b-a);
    for ( let i = m -1 ; i < arr.length; i+=m){
        answer += arr[i] * m;
    }
    return answer;
}

console.log(solution(3,4,[1, 2, 3, 1, 2, 3, 1]))