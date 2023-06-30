// https://school.programmers.co.kr/learn/courses/30/lessons/181918

function solution(arr) {
    let stk = [];
    let i = 0 ; 
    while( i < arr.length){
        if(stk.length ===0) stk.push(arr[i++]);
        else {
            let val = stk[stk.length-1];
            if( val < arr[i] ) stk.push(arr[i++]);
            else stk.pop();
        }

    }
    return stk;
}