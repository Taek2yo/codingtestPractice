// String형 배열 seoul의 element중 "Kim"의 위치 x를 찾아, "김서방은 x에 있다"는 String을 반환하는 함수, solution을 완성하세요. 
// seoul에 "Kim"은 오직 한 번만 나타나며 잘못된 값이 입력되는 경우는 없습니다.

// indexOf
function solution(s){
    let answer = s.indexOf("Kim")
    return `김서방은 ${answer}에 있다`
}

// findIndex
function solution2(s){
    let answer = s.findIndex(s=> s=== `Kim`)
    return `김서방은 ${answer}에 있다`;
}

console.log(solution2(["Jane", "Kim"]))