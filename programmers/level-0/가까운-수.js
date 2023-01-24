// 정수 배열 array와 정수 n이 매개변수로 주어질 때, array에 들어있는 정수 중 n과 가장 가까운 수를 return 하도록 solution 함수를 완성해주세요.

function solution(array, n){
    let arr = array.sort((b,a)=>b-a);
    let min = BigInt(n);
    let near = 0;
    for ( let i = 0; i < arr.length; i++){
        let abs = Math.abs(arr[i]-n);
        if ( abs < min){
            min = abs;
            near = arr[i];
        }
    }
   return near;
}

console.log(solution([3,10,28,27],20))
