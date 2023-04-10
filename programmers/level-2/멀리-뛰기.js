// https://school.programmers.co.kr/learn/courses/30/lessons/12914

function solution(n) {
  const dp = [1, 2];
  for (let i = 2; i < n; i++) {
    dp[i] = (dp[i - 1] + dp[i - 2]) % 1234567;
  }
  return dp[n - 1];
}

console.log(solution(4));
