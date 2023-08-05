// https://school.programmers.co.kr/learn/courses/30/lessons/42584

function solution(prices) {
  let answer = new Array(prices.length).fill(0);
  let stack = [];
  for (let i = 0; i < prices.length; i++) {
    while (stack.length && prices[i] < prices[stack[stack.length - 1]]) {
      let temp = stack.pop();
      answer[temp] = i - temp;
    }
    stack.push(i);
  }
  while (stack.length) {
    let temp = stack.pop();
    answer[temp] = prices.length - temp - 1;
  }
  return answer;
}

console.log(solution([1, 2, 3, 2, 3]));
