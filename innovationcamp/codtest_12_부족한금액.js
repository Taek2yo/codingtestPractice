function solution(price, money, count) {
    // 필요값 value로 설정
    let value = 0; 
    
    // 제한조건 count가 1보다 크거나 같다
    for(let i=1; i <= count; i++){
        value += price * i;
    }
    // return 조건문 ? 조건이 참이라면 실행할 식 : 거짓이라면(=money가 value보다 크다면) 0
    return value > money ? value - money : 0;
} 
console.log(solution(3,20,4));