// https://school.programmers.co.kr/learn/courses/30/lessons/118667

function findMinMovesToEqualSum(queue1, queue2) {
    const queue = [...queue1, ...queue2];
    let sum1 = queue1.reduce(sum, 0);
    let sum2 = queue2.reduce(sum, 0);

    if (sum1 === sum2) return 0;

    const totalSum = sum1 + sum2;

    if (totalSum % 2 !== 0) return -1;

    const halfSum = totalSum / 2;
    let start = 0;
    let end = queue1.length;
    let count = 0;

    while (count < queue.length * 2) {
        if (halfSum === sum1) {
            return count;
        } else if (halfSum > sum1) {
            sum1 += queue[end];
            end++;
        } else {
            sum1 -= queue[start];
            start++;
        }

        count++;
    }

    return -1;
}

const sum = (a, b) => a + b;