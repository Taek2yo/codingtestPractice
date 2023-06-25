// https://school.programmers.co.kr/learn/courses/30/lessons/181881
function solution(arr) {
  let x = 0;
  let prevArr = arr;
  while (true) {
    // 현재 배열을 조건에 맞게 변환
    const changeArr = prevArr.map((v) => {
      if (v >= 50 && v % 2 === 0) return v / 2;
      if (v < 50 && v % 2 === 1) return v * 2 + 1;
      return v;
    });
    // 이전의 모든 배열과 현재 모든 배열의 요소 비교
    const isAllSame = prevArr.every((v, i) => v === changeArr[i]);
    if (isAllSame) break;
    x += 1;

    // 현재 배열을 이전 배열 변수에 저장함
    prevArr = changeArr;
  }

  return x;
}

console.log(solution([1, 2, 3, 100, 99, 98]));
