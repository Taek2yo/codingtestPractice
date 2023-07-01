// https://school.programmers.co.kr/learn/courses/30/lessons/181830

function solution(arr) {
    const row = arr.length
    const col = arr[0].length
    
    if(row > col) {
        const gab = Array(row-col).fill(0)
        return arr.map(a => [...a, ...gab])
    } 
    
    if(col > row) {
        for(let i = 0 ; i < col-row ; i ++) {
            const gab = Array(col).fill(0)
            arr.push(gab)
        }
    }
    
    return arr
}