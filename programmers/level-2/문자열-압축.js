// https://school.programmers.co.kr/learn/courses/30/lessons/60057

function solution(s) {
    let answer = s.length;  // 초기값은 문자열 길이로 설정

    // i는 1부터 문자열 길이의 절반까지 증가
    for (let i = 1; i <= s.length / 2; i++) {
        let compressed = "";
        let prev = s.slice(0, i);  // 첫 부분을 초기화
        let count = 1;  // 반복 횟수 초기값은 1

        // i 길이의 단위로 문자열을 비교
        for (let j = i; j < s.length; j += i) {
            const current = s.slice(j, j + i);

            if (prev === current) {
                count++;
            } else {
                // 이전 문자와 다른 경우
                compressed += (count > 1 ? count : "") + prev;
                prev = current;
                count = 1;
            }
        }

        // 마지막 부분 처리
        compressed += (count > 1 ? count : "") + prev;

        // 가장 짧은 압축 결과 찾기
        answer = Math.min(answer, compressed.length);
    }

    return answer;
}

console.log(solution("aabbaccc"))