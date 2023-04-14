// https://school.programmers.co.kr/learn/courses/30/lessons/17680

function solution(cacheSize, cities){
    let answer = 0;
    let arr = [];

    cities = cities.map((v)=> v.toLowerCase());
    // 캐시 사이즈 0  = 모든게 cache miss 이므로 * 5 로 return
    if ( cacheSize === 0 ) return cities.length * 5;
    // 배열 순회시 cache hit이면 배열의 맨뒤로 push
    // miss 일 때는 ( 배열이 꽉찼다면 맨 앞을 제거하고) 배열의 맨뒤로 push
    for ( let i = 0; i < cities.length; i++){
        const idx = arr.findIndex((v) => v === cities[i])
        if ( idx !== -1) {
            arr.splice(idx, 1);
            answer += 1;
        } else if ( arr.length === cacheSize) {
            answer += 5;
            arr.shift();
        } else {
            answer += 5;
        }
        arr.push(cities[i]);
        console.log(arr)
    }
    return answer;
}


console.log(solution(3,["Jeju", "Pangyo", "Seoul", "NewYork", "LA", "Jeju", "Pangyo", "Seoul", "NewYork", "LA"]))