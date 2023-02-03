// 3x 마을 사람들은 3을 저주의 숫자라고 생각하기 때문에 3의 배수와 숫자 3을 사용하지 않습니다.

function solution(n) {
   let x3 = 0;
   for ( let i = 1; i <= n; i++){
    x3++
    while(x3.toString().includes(3) || x3 % 3 === 0){
        x3++
    }
   }
   return x3;
}

console.log(solution(15))