// https://school.programmers.co.kr/learn/courses/30/lessons/42583
function solution(bridge_length, weight, truck_weights) {
    let time = 0; // 경과 시간
    let bridge = []; // 다리 위의 트럭을 나타내는 배열

    // 다리 위에 트럭이 없고 대기 중인 트럭도 없을 때까지 반복
    while (bridge.length > 0 || truck_weights.length > 0) {
        time++;

        // 다리 위의 트럭 이동
        if (bridge.length > 0 && bridge[0].endTime === time) {
            weight += bridge.shift().weight;
        }

        // 대기 중인 트럭 추가
        if (truck_weights.length > 0 && truck_weights[0] <= weight) {
            const truckWeight = truck_weights.shift();
            bridge.push({ weight: truckWeight, endTime: time + bridge_length });
            weight -= truckWeight;
        }
    }

    return time;
}

console.log(solution(2,10,[7,4,5,6]))