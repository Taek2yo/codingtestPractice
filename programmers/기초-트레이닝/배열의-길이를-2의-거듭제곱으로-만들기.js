// https://school.programmers.co.kr/learn/courses/30/lessons/181857

function solution(arr) {
    const totalLength = 2 ** Math.ceil(Math.log2(arr.length));
    return [...arr, ...new Array(totalLength - arr.length).fill(0)];
  }