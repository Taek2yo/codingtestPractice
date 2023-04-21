// https://school.programmers.co.kr/learn/courses/30/lessons/42587

function solution(priorities,location){
    let answer = 0;
    let first = 0;

    while(true){
        first = priorities.shift();

        if ( first < Math.max(...priorities)){
            priorities.push(first);
            if( location === 0) location = priorities.length -1;
            else location--;
        } else {
            answer++;
            if( location === 0) break;
            else location--;
        }
    }
    return answer;
}

console.log(solution([2, 1, 3, 2],2))