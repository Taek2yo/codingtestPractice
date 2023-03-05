// 1부터 입력받은 숫자 n 사이에 있는 소수의 개수를 반환하는 함수, solution을 만들어 보세요.
// 소수는 1과 자기 자신으로만 나누어지는 수를 의미합니다. (1은 소수가 아닙니다.)

// 에라토스테네스의 체
function solution(n){
    let arr = Array(n + 1).fill(true).fill(false, 0, 2);
    for(let i = 2 ; i * i <= n; i++){
        if(arr[i]){
            for(let j = i * i; j <= n; j+=i){
                arr[j] = false;
            }
        }
    }

    return arr.filter(e=>e).length;
}
console.log(solution(10));

// 소수 개수 구하기
let isPrimes = solution(100)
isPrimes.filter(e => e).length; 
// 25

// 소수 반환하기
isPrimes.map((v, i) => (v) ? i : 0).filter(e => e);
// [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97]