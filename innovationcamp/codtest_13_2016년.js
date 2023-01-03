function solution(a, b) {
    var answer = new Date(2016,(a-1),b).toString().substring(0,3).toUpperCase()
                // 1. new Date(): Mon Jan 01 1996 00:00:00 GMT+0900 (한국표준시) {} => 데이터 타입이 Object
                // 2. toString 사용 Object에서 문자열로 변환
                // 3. substring(0.3) : 0번부터 3개의 글자를 문자열에서 잘라냄
                // 4. 대문자로 변환 ex ) MON
    return answer;
}

//new Date 사용시 주의사항
// 1. 연도는 2000년대 이후부터는 천단위로 입력, 십의 단위로 입력할 경우 1900년대로 인식.
// -> ex) new Date(95.12.1) = 1995년 출력, new Date(2021.12.1) = 2021년 출력
// 월은 0부터 시작함(0월 = 1월, 1월 = 2월), 그래서 a-1을 이용하여 월을 맞춤

console.log(solution(10,17))