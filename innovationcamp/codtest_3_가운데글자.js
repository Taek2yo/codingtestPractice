function solution(s) {
    var answer = '';
    //charAt 함수는 string 변수에서 사용가능. charAt([index])
    // += 오른쪽 피연산자의 값을 변수에 더한 결과를 다시 변수에 할당.
    if(s.length % 2 === 0) {                        //s의 길이를 2로나눈 나머지가 절대적으로 0이라면 -> 짝수라면
        answer += s.charAt(s.length / 2 - 1);       // s의 길이를 2로나누고 그 값에 1을 뺀 자리의 문자 answer 라는 변수에 더함
    }     
        answer += s.charAt(s.length / 2);               // s의 길이를 2로나눈 그 값 자리의 문자를 answer 라는 변수에 더해라 
    
    return answer;                                      // 위 두값의 자리를 도출해서 return 해라
}
//테스트 입니다.
console.log(solution("abcde"));
