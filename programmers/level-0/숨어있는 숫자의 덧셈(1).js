// 문자열 my_string이 매개변수로 주어집니다. my_string안의 모든 자연수들의 합을 return하도록 solution 함수를 완성해주세요.
function solution (my_string){
    const arr = [...my_string].map(Number).filter((e)=>!isNaN(e))
    let answer = arr.reduce((a,c)=>a+c);
    return answer;
}
