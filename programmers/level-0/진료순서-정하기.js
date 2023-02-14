// 외과의사 머쓱이는 응급실에 온 환자의 응급도를 기준으로 진료 순서를 정하려고 합니다.
// 정수 배열 emergency가 매개변수로 주어질 때 응급도가 높은 순서대로 진료 순서를 정한 배열을 return하도록 solution 함수를 완성해주세요.

function solution(emergency) {
  let sorted = [...emergency].sort((a, b) => b - a);
  return emergency.map((a, _) => sorted.indexOf(a) + 1);
}

// sort() 원본 배열을 변경하여 요소를 정렬시키기 때문에, 전개 연산자를 활용하여 새로운 배열을 할당해준다.