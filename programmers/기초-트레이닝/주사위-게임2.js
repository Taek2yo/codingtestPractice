// https://school.programmers.co.kr/learn/courses/30/lessons/181930

function solution(a, b, c) {
    let answer = 0;
    const sum = a + b + c;
    const squareSum = a ** 2 + b ** 2 + c ** 2;
    const cubeSum = a ** 3 + b ** 3 + c ** 3;
  
    if (a !== b && a !== c && b !== c) {
      answer = sum;
    } else if (a === b && a === c) {
      answer = sum * squareSum * cubeSum;
    } else {
      answer = sum * squareSum;
    }
  
    return answer;
  }

console.log(solution(4,4,4))