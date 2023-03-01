// 2016년 1월 1일은 금요일입니다. 2016년 a월 b일은 무슨 요일일까요? 두 수 a ,b를 입력받아 2016년 a월 b일이 무슨 요일인지 리턴하는 함수, solution을 완성하세요. 

function solution(a, b){
    const week = ['SUN','MON','TUE','WED','THU','FRI','SAT'];
    const dayOfWeek = week[new Date(`2016-${a}-${b}`).getDay()];
    return dayOfWeek;
}

// Date객체 안쓰고 풀기
function solution2(a, b){
    const week = ['SUN','MON','TUE','WED','THU','FRI','SAT'];
    const month = [31,29,31,30,31,30,31,31,30,31,30,31];
    // 1월 1일 = 금요일 , b 가 1일 때 인덱스는 5가 되어야함
    let day = b+4;
    for ( let i = 0 ; i < a-1; i++){
        day += month[i];
    }
    return week[day%7];
}

console.log(solution2(5,24))