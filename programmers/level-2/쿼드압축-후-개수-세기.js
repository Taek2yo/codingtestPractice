// https://school.programmers.co.kr/learn/courses/30/lessons/68936

function solution(arr) {
    const answer = [0, 0];

    function check(array, n, row, col) {
        if (n === 1) {
            answer[array[row][col]]++;
            return;
        }

        let isSame = true;
        const firstValue = array[row][col];

        for (let i = row; i < row + n; i++) {
            for (let j = col; j < col + n; j++) {
                if (array[i][j] !== firstValue) {
                    isSame = false;
                    break;
                }
            }
            if (!isSame) break;
        }

        if (isSame) {
            answer[firstValue]++;
            return;
        }

        const half = n / 2;
        check(array, half, row, col);
        check(array, half, row, col + half);
        check(array, half, row + half, col);
        check(array, half, row + half, col + half);
    }

    check(arr, arr.length, 0, 0);

    return answer;
}

console.log(solution([[1,1,0,0],[1,0,0,0],[1,0,0,1],[1,1,1,1]]))