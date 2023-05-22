// https://school.programmers.co.kr/learn/courses/30/lessons/181880

function solution(num_list){
    let answer = 0;
    for ( let i = 0; i < num_list.length; i++){
        while ( num_list[i] != 1){
            if( num_list[i] % 2 === 0){
                num_list[i] /= 2;
            } else {
                num_list[i] -= 1;
                num_list[i] /= 2;
            }
            answer++;
        }
    }
    return answer;
}

// 비트 연산
const solution2 = (num_list) => {
    return num_list.map((v) => v.toString(2).length -1).reduce((a,c)=>a+c)
}

console.log(solution2([12, 4, 15, 1, 14]))