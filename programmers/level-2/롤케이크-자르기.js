// https://school.programmers.co.kr/learn/courses/30/lessons/132265

function solution(topping) {
    const set = new Set();
    const map = new Map();

    set.add(topping[0]);
    for (let i = 1; i < topping.length; i++) {
        const number = topping[i];
        map.set(number, (map.get(number) || 0) + 1);
    }

    let answer = 0;
    for (let i = 1; i < topping.length; i++) {
        const number = topping[i];

        set.add(number);

        const numberSize = map.get(number);
        if (numberSize === 1) {
            map.delete(number);
        } else {
            map.set(number, numberSize - 1);
        }

        if (set.size === map.size) {
            answer++;
        }
    }

    return answer;
}


console.log(solution([1, 2, 1, 3, 1, 4, 1, 2]))