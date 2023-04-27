// https://school.programmers.co.kr/learn/courses/30/lessons/181928

function solution(num_list){
    let odd = '';
    let even = '';
    
    for ( let i = 0; i < num_list.length; i++){
        if( num_list[i] % 2 === 1){
            odd += num_list[i]
        } else {
            even += num_list[i]
        }
    }
    return +odd + +even
}

console.log(solution([3,4,5,2,1]))