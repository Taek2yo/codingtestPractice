// https://school.programmers.co.kr/learn/courses/30/lessons/12900?language=javascript

function solution(n) {
  let dp = [1, 1];
  for (let i = 2; i <= n; i++) {
    dp[i] = (dp[i - 1] + dp[i - 2]) % 1000000007;
  }
  return dp[n];
}

console.log(solution(4));

// 처음 피보나치 수열, 재귀로 풀었었는데 스택 오버 플로우됨
// 탑다운이 아닌 바텀업 방식으로 풀었다.
// 또한 주의할 점을 값을 저장할 때, 나머지 값을 저장해야 한다.


// 보기엔 쉬워보여서 금방풀었는데 테스트 케이스에서 계속 런타임나서 이유 생각하느라 한참 걸린 문제.
// 웃긴건 1000000007를 변수로 선언하고 풀게되면 런타임에러가 또 난다.. 

// 밑은 런타임 에러
function RuntimeError(n) {
    let dp = [1, 1];
    const MOD = 1000000007;
    for (let i = 2; i <= n; i++) {
      dp[i] = (dp[i - 1] + dp[i - 2]) % MOD;
    }
    return dp[n];
  }
console.log(RuntimeError(4));
