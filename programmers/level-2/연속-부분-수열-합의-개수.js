// https://school.programmers.co.kr/learn/courses/30/lessons/131701

function solution(elements) {
    const set = new Set();

    // 1 ~ n 길이까지의 연속부분수열을 만들기 위해 전체 길이만큼 반복
    for (let i = 1; i <= elements.length; i++) {
      let end = 0;
      let sum = 0;
  
      for (let first = 0; first < elements.length; first++) {
        // 각 반복이 시작되면 윈도우 범위만큼 sum을 만들어둠
        if (first === 0) {
          while (end < i) {
            sum += elements[end++];
          }
        }
        // 그 이외의 경우 윈도우 범위에서 하나씩 더하고 빼면서 연속 부분수열의 합을 만든다.
        else {
          // first 이전 값을 뺀다.
          sum -= elements[first - 1];
          // end가 전체 배열의 끝에 다다르면, 다시 앞으로 돌아간다.(순환)
          if (end === elements.length) end = 0;
          // end 값을 더한다.
          sum += elements[end++];
        }
        set.add(sum);
      }
    }
    return set.size;
}

console.log(solution([7,9,1,1,4]))