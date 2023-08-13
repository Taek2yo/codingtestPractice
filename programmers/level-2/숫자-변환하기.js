// https://school.programmers.co.kr/learn/courses/30/lessons/154538

function solution(x, y, n) {
    let count = 0;
    let currentSet = new Set([x]);

    while(currentSet.size > 0) {
        if(currentSet.has(y))
            return count;
        let next = new Set();
        for (let v of currentSet.values()) {
            if(v * 2 <= y) next.add(v * 2);
            if(v * 3 <= y) next.add(v * 3);
            if(v + n <= y) next.add(v + n);
        }
        currentSet = next;
        count++;
    }
    return -1;
}


console.log(solution(2,5,4))