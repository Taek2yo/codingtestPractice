// https://school.programmers.co.kr/learn/courses/30/lessons/12936

function solution(n, k) {
    const factorial = [];
    let answer = [];

    factorial[0] = 1;
    for (let i = 1; i <= n; i++) {
        factorial[i] = factorial[i - 1] * i;
    }
    const used = Array(n + 1).fill(false);
    k--;

    for (let i = 1; i <= n; i++) {
        let idx = Math.floor(k / factorial[n - i]) + 1;

        for (let j = 1; j <= n; j++) {
            if (used[j]) continue;
            if (idx === 1) {
                answer.push(j);
                used[j] = true;
                break;
            }
            idx--;
        }
        k %= factorial[n - i];
    }

    return answer;
}

console.log(solution(3,5))