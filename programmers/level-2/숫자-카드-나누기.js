// https://school.programmers.co.kr/learn/courses/30/lessons/135807

function gcd(a, b) {
    while (b !== 0) {
        const temp = a % b;
        a = b;
        b = temp;
    }
    return a;
}

function solution(arrayA, arrayB) {
    // 배열의 모든 요소들의 최대공약수를 찾기
    const gdnA = arrayA.reduce((a, b) => gcd(a, b), arrayA[0]);
    const gdnB = arrayB.reduce((a, b) => gcd(a, b), arrayB[0]);

    // 조건에 맞는 최대공약수를 찾아서 배열에 추가
    const answer = [];
    if (arrayA.every(e => e % gdnB !== 0)) {
        answer.push(gdnB);
    }
    if (arrayB.every(e => e % gdnA !== 0)) {
        answer.push(gdnA);
    }

    // 결과 반환
    return answer.length === 0 ? 0 : Math.max(...answer);
}

console.log(solution([10, 17],[5, 20]))


// 각각의 원소들을 GCD로 나눠본 후, 나누어떨어지지 않는 경우에 해당 GCD를 찾는 것이 목적
// 두 배열의 각 요소들에 대한 GCD를 계산하고, 문제의 조건을 만족하는 GCD를 배열에 추가
// 조건을 만족하는 GCD가 없는 경우 0을 반환하고, 그렇지 않은 경우 조건을 만족하는 GCD 중 가장 큰 값을 반환