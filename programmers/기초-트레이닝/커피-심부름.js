// https://school.programmers.co.kr/learn/courses/30/lessons/181837

function solution(order) {
    const americano = 4500;
    const cafelatte = 5000;
    
    let sum = 0;
    
    for (const menu of order) {
      if (menu.includes('cafelatte')) {
        sum += cafelatte;
      } else {
        sum += americano;
      }
    }
        
    return sum;
  }

console.log(solution(["cafelatte", "americanoice", "hotcafelatte", "anything"]))