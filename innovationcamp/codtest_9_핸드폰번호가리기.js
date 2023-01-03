function solution(s) {
    var answer = '';
    for (let i=0; i<s.length; i++){
        if(i<s.length-4){
            answer += "*";     
        } else{
            answer += s[i];
        }
    }
    return answer;
}