// https://school.programmers.co.kr/learn/courses/30/lessons/181856

function solution(arr1, arr2) {
    const sum1 = arr1.reduce((a, c) => a + c);
    const sum2 = arr2.reduce((a, c) => a + c);
  
    if (arr1.length > arr2.length) {
      return 1;
    } else if (arr1.length < arr2.length) {
      return -1;
    } else {
      if (sum1 > sum2) {
        return 1;
      } else if (sum1 < sum2) {
        return -1;
      } else {
        return 0;
      }
    }
  }

console.log(solution([49,13], [70,11,2]))