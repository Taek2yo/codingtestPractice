// https://school.programmers.co.kr/learn/courses/30/lessons/42883

function solution(number, k) {
    const stack = [];
  
    for (const num of number) {
      while (k > 0 && stack.length > 0 && stack[stack.length - 1] < num) {
        stack.pop();
        k--;
      }
      stack.push(num);
    }

    while (k > 0) {
      stack.pop();
      k--;
    }
  
    return stack.join("");
  }

console.log(solution("1924", 2));
