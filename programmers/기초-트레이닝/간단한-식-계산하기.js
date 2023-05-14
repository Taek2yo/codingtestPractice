// https://school.programmers.co.kr/learn/courses/30/lessons/181865


function solution(binomial){
    return Function(`return ${binomial}`)()
}

console.log(solution("43 + 12"))


function solution2(binomial){
    const str = binomial.split(" ")
    const n1 = parseInt(str[0]);
    const n2 = parseInt(str[2]);
    switch(str[1]) {
        case "+" :
            return n1 + n2;
        case "-" :
            return n1 - n2;
        case "*" :
            return n1 * n2;
    }
}

console.log(solution2("0 - 7777"))