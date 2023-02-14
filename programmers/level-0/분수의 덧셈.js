// 첫 번째 분수의 분자와 분모를 뜻하는 denum1, num1, 두 번째 분수의 분자와 분모를 뜻하는 denum2, num2가 매개변수로 주어집니다
// 두 분수를 더한 값을 기약 분수로 나타냈을 때 분자와 분모를 순서대로 담은 배열을 return 하도록 solution 함수를 완성해보세요.

const solution = (denum1, num1, denum2, num2) => {
  // 분모
  let denominator = num1 * num2;
  // 분자
  let molecule = num1 * denum2 + num2 * denum1;
  // 최대 공약수
  let GCD = 1; 
  // 기약분수
  for (let i = 1; i <= molecule; i++) {
    if (molecule % i === 0 && denominator % i === 0) {
      GCD = i;
    }
  }
  return [ molecule / GCD , denominator / GCD]
};
