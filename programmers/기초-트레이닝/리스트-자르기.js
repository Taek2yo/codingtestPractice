//https://school.programmers.co.kr/learn/courses/30/lessons/181897

function solution(n, slicer, num_list) {
    let [a, b, c] = slicer;
    let result = [];

    if (n === 1) {
        result = num_list.slice(0, b + 1);
    } else if (n === 2) {
        result = num_list.slice(a);
    } else if (n === 3) {
        result = num_list.slice(a, b + 1);
    } else if (n === 4) {
        for (let i = a; i <= b; i += c) {
            result.push(num_list[i]);
        }
    }

    return result;
}
