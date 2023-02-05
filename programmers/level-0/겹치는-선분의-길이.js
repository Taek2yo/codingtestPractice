// 선분 3개가 평행하게 놓여 있습니다. 세 선분의 시작과 끝 좌표가 [[start, end], [start, end], [start, end]] 형태로 들어있는 2차원 배열 lines가 매개변수로 주어질 때, 
// 두 개 이상의 선분이 겹치는 부분의 길이를 return 하도록 solution 함수를 완성해보세요.

function solution(lines){
    let answer = 0;
    let lineMap = new Array(200);
    lineMap.fill(0);
  
    for (let i = 0; i < 3; i++) {
      let left = lines[i][0];
      let right = lines[i][1];
  
      for (let j = left; j < right; j++) {
        lineMap[j + 100] += 1;
      }
    }
  
    for (let i in lineMap) {
      if (lineMap[i] > 1) {
        answer += 1;
      }
    }
  
    return answer;
}

// start와 end에 해당하는 공간을 모두 채운 후에 두번 이상 채워진 건 겹쳐진 것이므로 그것의 갯수를 구한다