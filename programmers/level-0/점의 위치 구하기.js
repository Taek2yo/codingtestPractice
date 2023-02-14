function solution(dot) {
  let answer = 0;
  if (dot[0] > 0 && dot[1] > 0) {
    answer = 1;
  } else if (dot[0] < 0 && dot[1] > 0) {
    answer = 2;
  } else if (dot[0] < 0 && dot[1] < 0) {
    answer = 3;
  } else if (dot[0] > 0 && dot[1] < 0) {
    answer = 4;
  }
  return answer;
}

// 피드백
// 하드코딩인 것 같아서 푼 뒤에 다른 사람 풀이를 보니 구조 분해를 하였다.

function solution(dot) {
  // 구조분해
  const [a, b] = dot;
  const check = a * b > 0;
  return a > 0 ? (check ? 1 : 4) : (check ? 3 : 2);
}
