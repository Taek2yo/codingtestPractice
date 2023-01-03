function solution(n){
    let result="";
    let arr = n.toString().split("").reverse();
    let temp = [];
    let sum = 0;
    for(let i =0; i < arr.length; i++) {
        temp.push(arr[i])
        sum += parseInt(arr[i])
        result = `"${temp.join("+")}=${sum}"`
 }
    return result;
 }

 console.log(solution(718253))