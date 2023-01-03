function solution(s){
    let change = s.toUpperCase();       //s문자열을 대문자로 변환 (소문자도 상관없음 toLowerCase)

    let p = change.split("P").length;       // p = change에서 P만 떼서.길이를잰다(문자열로 배열했으니 갯수)
    let y = change.split("Y").length;       // y = change에서 Y만 떼서.길이를잰다
    
    return p == y ? true : false;           // p == y 의 갯수가 같으면 true : 다르다면 false
}

// 테스트 입니다                            
console.log(solution("abcd"))               // p와y가 없어도 true를 return 하는것 확인.
                                            // why? 위에서 P,Y를 떼서 길이를 재라고했는데 없으니 0 그러므로 0 == 0 이니까 true