// https://school.programmers.co.kr/learn/courses/30/lessons/178870

function solution(sequence, k) {
    let start = 0; // 투 포인터 시작 지점
    let end = 0;   // 투 포인터 끝 지점
    let sum = 0;   // 현재 부분 수열의 합
    let minLength = Infinity; // 최소 길이 초기값 설정
    let result = []; // 결과 배열 [시작 인덱스, 마지막 인덱스]

    while (start < sequence.length) {
        // 현재 부분 수열의 합이 k보다 작은 경우, end를 오른쪽으로 이동하며 부분 수열에 원소를 추가
        if (sum < k && end < sequence.length) {
            sum += sequence[end];
            end++;
        } else {
            // 현재 부분 수열의 합이 k와 같거나 큰 경우, 결과를 갱신하고 start를 오른쪽으로 이동하여 부분 수열에서 원소 제거
            if (sum === k && end - start < minLength) {
                minLength = end - start;
                result = [start, end - 1];
            }
            sum -= sequence[start];
            start++;
        }
    }

    return result;
}

console.log(solution([1, 2, 3, 4, 5],7))