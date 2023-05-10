// https://school.programmers.co.kr/learn/courses/30/lessons/181841

function solution(str_list, ex){
    for ( let i = 0; i < str_list.length; i++){
        if( str_list[i].includes(ex) ){
            str_list.splice(i, 1);
            i--
        }
    }
    return str_list.join('')
}


const solution2 = (str_list, ex) =>{
   return str_list.filter((v)=> !v.includes(ex)).join('')
}

console.log(solution2(["abc", "def", "ghi"],"ef"))