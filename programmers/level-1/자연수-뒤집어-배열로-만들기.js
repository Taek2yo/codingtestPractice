// 자연수 n을 뒤집어 각 자리 숫자를 원소로 가지는 배열 형태로 리턴해주세요. 예를들어 n이 12345이면 [5,4,3,2,1]을 리턴합니다.

function solution(n) {
   return (n+'').split('').reverse().map(v=>+v)
}



// 숫자 풀이
function solution2(n){
    let arr =[];
    do{
        arr.push(n%10);
        n = Math.floor(n/10);
    } while (n>0)
    return arr;
}
console.log(solution2(12345))