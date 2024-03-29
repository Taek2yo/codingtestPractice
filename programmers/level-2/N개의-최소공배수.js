// https://school.programmers.co.kr/learn/courses/30/lessons/12953

const gcd = (a, b) => {
  while (b > 0) {
    let temp = b;
    b = a % b;
    a = temp;
  }
  return a;
};

const lcm = (a, b) => {
  return (a * b) / gcd(a, b);
};

const solution = (arr) => {
  let answer = 1;
  for (let i = 0; i < arr.length; i++) {
    answer = lcm(answer, arr[i]);
  }

  return answer;
};

console.log(solution([2, 6, 8, 14]));
