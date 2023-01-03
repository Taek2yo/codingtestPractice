function solution(absolutes, signs) {
    let answer = 0;
    for (let i = 0; i < absolutes.length; i++) {
        if (signs[i] === true) {            //signgs[i] 값과 타입 둘다 일치하다면true
            answer +=  absolutes[i];  
        } else {                               //signs 배열의 값이 true이면 '+', false이면 '-'로 계산합니다.
            answer -=  absolutes[i]; 
        }
    }
    return answer
}
