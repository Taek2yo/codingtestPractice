// https://school.programmers.co.kr/learn/courses/30/lessons/131704

function solution(order) {
    let result = 0;
    let arr = [];
  
    for (let i = 1; i <= order.length; i++) {
      arr.push(i);
      while (arr.length !== 0 && arr.at(-1) === order[result]) {
        arr.pop(); 
        result++;
      }
    }
  
    return result;
  }