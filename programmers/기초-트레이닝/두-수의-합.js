// https://school.programmers.co.kr/learn/courses/30/lessons/181846

function solution(a, b) {
    const sum = BigInt(a) + BigInt(b);
    return sum.toString();
  }

console.log(solution('18446744073709551615','287346502836570928366'))