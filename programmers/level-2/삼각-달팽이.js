function solution(n) {
  const answer = [];
  const arr = new Array(n).fill(null).map(() => new Array(n).fill(0));

  const directions = [
    [1, 0], // 아래
    [0, 1], // 오른
    [-1, -1], // 대각선
  ];

  let row = -1; // 현재 행
  let col = 0; // 현재 열

  let nowValue = 1; // 현재 채우는 숫자
  let nowDirectionIndex = 0; // 현재 이동 방향

  for (let i = n; i > 0; i -= 1) {
    // n부터 1까지 반복
    const [dRow, dCol] = directions[nowDirectionIndex]; // 현재 이동 방향을 가져옴

    for (let j = 0; j < i; j += 1) {
      // 현재 단계에서 이동할 횟수만큼 반복
      row += dRow; // 행 업데이트
      col += dCol; // 열 업데이트

      arr[row][col] = nowValue; // 현재 위치에 숫자 할당
      nowValue += 1;
    }

    nowDirectionIndex = (nowDirectionIndex + 1) % 3; // 다음 이동 방향으로 변경
  }

  for (let i = 0; i < n; i += 1) {
    for (let j = 0; j < n; j += 1) {
      if (arr[i][j]) answer.push(arr[i][j]); // 0이 아닌 숫자를 결과 배열에 추가
    }
  }
  return answer;
}

console.log(solution(4));
