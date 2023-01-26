// 정수 배열 array가 매개변수로 주어질 때, 가장 큰 수와 그 수의 인덱스를 담은 배열을 return 하도록 solution 함수를 완성해보세요.

function solution(array){
    const sort = [...array].sort((a,b)=> b-a);
    const idx = array.indexOf(sort[0])
    return [sort[0], idx]
}

console.log(solution([9, 10, 11, 8]))