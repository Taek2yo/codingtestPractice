function solution(s){
    var answer = s.indexOf("Kim")
    return `김서방은 ${answer}에 있다`
}

// indexOf 메서드는 배열에서 지정된 요소를 찾을 수 있는 첫 번째 인덱스를 반환하고 존재하지 않으면 -1을 반환,
// array.indexOf("찾는값",인덱스 시작값)
// ``백틱 사용하면 그 안에서 문자열과 함께 표현식이나 변수를 ${}형태로 사용 가능
// ex) `김서방은 ${answer}에 있다` => 김서방은 ${answer}에 있다.

console.log(solution(["Jane","Kim","Tod"]))
