function solution(arr){
    if (arr.length > 1){
        let minNum = Math.min(arr);
        let idx = arr.indexOf(minNum);
        arr.splice(idx, 1)
    
    } else {
        arr = [-1];
    }
    return arr;
}

console.log(solution[4,3,2,1])  