// https://school.programmers.co.kr/learn/courses/30/lessons/147354

function solution(data, col, row_begin, row_end) {
    // 데이터를 col 열을 기준으로 오름차순 정렬하되, 동일한 값일 경우 첫 번째 열을 내림차순 정렬
    data.sort((a, b) => {
        if (a[col - 1] !== b[col - 1]) {
            return a[col - 1] - b[col - 1];
        } else {
            return b[0] - a[0];
        }
    });

    // S_i를 계산하고 누적하여 XOR 값을 구합니다.
    let xorValue = 0;
    for (let i = row_begin - 1; i < row_end; i++) {
        let Si = data[i].reduce((sum, value, index) => sum + value % (i + 1), 0);
        xorValue ^= Si;
    }

    return xorValue;
}


console.log(solution([[2,2,6],[1,5,10],[4,2,9],[3,8,3]],2,2,3))