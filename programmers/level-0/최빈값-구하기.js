//최빈값은 주어진 값 중에서 가장 자주 나오는 값을 의미합니다. 정수 배열 array가 매개변수로 주어질 때, 최빈값을 return 하도록 solution 함수를 완성해보세요. 최빈값이 여러 개면 -1을 return 합니다.

function solution(array) {
    let map = new Map();
    
    // Map 객체 초기화
    for(let i = 0; i <= Math.max(...array); i++){
        map.set(i, 0);    
    }
    
    // array 배열의 원소값과 일치하는 Map 객체의 key를 증가시킨다
    for(let i = 0; i < array.length; i++){
        map.set(array[i], map.get(array[i]) + 1);
    }
    
    // Map 객체의 value만 모아서 배열로 만든다
    let arr = Array.from(map.values());
    
    // 최대값 산출
    let max = Math.max(...arr);
    
    // 최대값이 하나만 있다면 max, 여러 개 중복된다면 -1 출력
    if(arr.indexOf(max) !== arr.lastIndexOf(max)){
        return -1;
    } else {
        return arr.indexOf(max);
    }
}