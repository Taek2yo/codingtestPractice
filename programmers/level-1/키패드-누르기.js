// https://school.programmers.co.kr/learn/courses/30/lessons/67256

function solution(numbers, hand) {
    let answer = "";
    
    // 스마트폰 키패드 객체배열화 = 좌표화
    let phone = {
        1: [1,1], 2: [1,2], 3: [1,3],
        4: [2,1], 5: [2,2], 6: [2,3],
        7: [3,1], 8: [3,2], 9: [3,3],
        "*": [4,1], 0: [4,2], "#": [4,3]
    };
    
    // 왼손과 오른손의 시작점을 명시
    let Llocation = phone["*"];
    let Rlocation = phone["#"];
    
    for(let i = 0; i < numbers.length; i++){
        let number = numbers[i];
        
        if(number === 1 || number === 4 || number === 7){
            answer += "L";
            Llocation = phone[number];
        } else if (number === 3 || number === 6 || number === 9){
            answer += "R";
            Rlocation = phone[number];
        } else {
            // 목적지
            let move = phone[number];
            
            // 왼손에서의 거리
            let distanceL = [Math.abs(move[0] - Llocation[0]), Math.abs(move[1] - Llocation[1])];
            let distanceFromL = distanceL[0] + distanceL[1];
            
            // 오른손에서의 거리
            let distanceR = [Math.abs(move[0] - Rlocation[0]), Math.abs(move[1] - Rlocation[1])];
            let distanceFromR = distanceR[0] + distanceR[1];
            
            // 거리가 같으면
            // hand에 따라서 움직인다.
            if(distanceFromL === distanceFromR){
                if(hand === "right"){
                    answer += "R";
                    Rlocation = phone[number];
                } else {
                    answer += "L";
                    Llocation = phone[number];
                }
            } else {
                // 거리가 다르면
                // 거리가 더 짧은 쪽 손이 움직인다.
                if(distanceFromL < distanceFromR){
                    answer += "L";
                    Llocation = phone[number];
                } else {
                    answer += "R";
                    Rlocation = phone[number];
                }
            }
        }
    }
    
    return answer;
}

console.log(solution([1, 3, 4, 5, 8, 2, 1, 4, 5, 9, 5],"right"))

// 다른 분의 풀이를 참고했다.. 다시