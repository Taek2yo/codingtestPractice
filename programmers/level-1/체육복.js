// https://school.programmers.co.kr/learn/courses/30/lessons/42862

function solution(n, lost, reserve) {
  
    const clothes = Array(n).fill(1);
   
    lost.map((lost) => clothes[lost-1] = 0);
    
    reserve.map(reserve => clothes[reserve-1] += 1);

    for(let i=0; i<n; i++){
       
        if( clothes[i] === 0 && clothes[i-1] === 2 ){
            clothes[i] = 1;
            clothes[i-1] = 1;
        }
       
        else if( clothes[i] === 0 && clothes[i+1] === 2 ){
            clothes[i] = 1;
            clothes[i+1] = 1;
        }
    }
    
    return clothes.filter(v => v > 0).length;
}
console.log(solution(5,	[2, 4],	[3]));
