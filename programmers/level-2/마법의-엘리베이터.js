// https://school.programmers.co.kr/learn/courses/30/lessons/148653

function solution(storey) {
    let answer = 0;

    while (storey !== 0) {
        const remainder = storey % 10;
        
        if (remainder > 5) {
            answer += (10 - remainder);
            storey += 10;
        } else if (remainder < 5) {
            answer += remainder;
        } else {
            if (Math.floor(storey / 10) % 10 > 4) {
                storey += 10;
            }
            answer += remainder;
        }
        
        storey = Math.floor(storey / 10);
    }

    return answer;
}

console.log(solution(16))


// 다른 풀이
function solution(storey) {
    if (storey < 5) return storey;
    const r = storey % 10;
    const m = (storey - r) / 10;
    return Math.min(r + solution(m), 10 - r + solution(m + 1));
}

// 재귀적으로 계단을 하나 올라가거나 내려가는 작업의 수를 최소화