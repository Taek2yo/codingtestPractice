// https://school.programmers.co.kr/learn/courses/30/lessons/92335

function isPrime(number) {
  if (number <= 1) {
    return false;
  }
  for (let i = 2; i <= Math.sqrt(number); i++) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
}

function solution(n, k) {
  let answer = 0;
  let num = n.toString(k);
  let numArr = num.split("0"); 

  for (let i = 0; i < numArr.length; i++) {
    if (isPrime(Number(numArr[i]))) {
      answer++; 
    }
  }

  return answer;
}

console.log(solution(437674,3))