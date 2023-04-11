// https://school.programmers.co.kr/learn/courses/30/lessons/42747

function solution(citations) {
    citations.sort((a, b) => b - a);
    let answer = 0;
    for (let i = 0; i < citations.length; i++) {
        if (i < citations[i]) {
        answer++;
    }
    }
  return answer;
}

console.log(solution([3, 0, 6, 1, 5]));
