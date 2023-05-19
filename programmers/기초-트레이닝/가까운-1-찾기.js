// https://school.programmers.co.kr/learn/courses/30/lessons/181898

function solution(arr, idx) {
    for (let i = idx; i < arr.length; i++) {
      if (arr[i] === 1) {
        return i;
      }
    }
    return -1;
  }


console.log(solution([0, 0, 0, 1],1))

const solution2 = ( arr, idx ) => arr.indexOf(1, idx)