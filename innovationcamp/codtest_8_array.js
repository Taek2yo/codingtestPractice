function solution(arr) {
  var answer = 0;
  let sum = 0;
    for (var i=0; i<arr.length; i++) {    // i가 arr의 길이보다 작을때까지 i를 하나씩 증가
    sum += arr[i];                      // arr[i] -> array의 값들을 sum에 더해라
  }
  answer = sum / arr.length;
  return answer;
}


// 테스트
var testsolution = [1,2,3,4]
console.log(solution(testsolution))