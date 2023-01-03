function solution(participant, completion) {
    participant.sort();         // 참가자 정렬
    completion.sort();          // 완주자 정렬
    for(let i=0; i<participant.length;i++){
        if(participant[i] !== completion[i])
        return participant[i];
    }
}
// sort 함수를 사용해서 p와 c의 배열 정렬을 비교해서 남는 배열 요소 출력
// p의 배열에 비완주자가 나올 경우 두 배열을 비교하면 불일치, 그때 p의 배열 요소를 출력
// 하지만 단점, 문제는 풀었지만 sort 문을 사용할 경우 시간복잡도가 증가하여 효율이 많이 떨어지는 코드임.
// 즉, 정답이 나왔어도 반복문은 계속 돌아갈 것이기 때문에 성능이 많이 떨어진다.
