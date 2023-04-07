// https://school.programmers.co.kr/learn/courses/30/lessons/42885

function solution(people, limit){
    let answer = 0;
    people.sort((a,b)=>b-a);
    for ( let i = 0 , j = people.length -1 ; i <= j; i++, answer++){
        if ( people[i] + people[j] <= limit) j--;
    }
    return answer;
}

console.log(solution([70, 50, 80, 50],100))