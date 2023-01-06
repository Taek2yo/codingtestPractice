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

console.log(solution(1, 2, 3, 4));


// 풀고 난 뒤 피드백
// 문제를 다 잘 푼 것 같았는데 , 10번째 에서 생각없이 const로 선언했다가 에러가 떠서 뭐가 문제지 하고 한참을 찾아본 뒤에야
// let으로 선언해야 한다는 것을 알았다...
//
// let은 재할당은 가능하지만 const 는 재할당도 안된다. 원시값은 불가능하나, 객체는 가능. const 키워드는 재할당을 금지함.