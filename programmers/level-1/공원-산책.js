// https://school.programmers.co.kr/learn/courses/30/lessons/172928

function solution(park, routes) {
    const Row = park.length - 1;
    const Col = park[0].length - 1;

    let row = park.findIndex((s)=> s.includes("S"));
    let col = park[row].indexOf("S");

    routes.forEach((pos) =>{
        const [d, n] = pos.split(" ");
        
        let tempRow = row;
        let tempCol = col;
        let flag = true;

        for ( let i = 0 ; i < Number(n); i++){
            if(d === 'E') tempCol++;
            else if ( d === 'W') tempCol--;
            else if ( d === 'S') tempRow++;
            else if ( d === 'N') tempRow--;
            
            if (
                tempRow > Row ||
                tempRow < 0 ||
                tempCol > Col ||
                tempCol < 0 ||
                park[tempRow][tempCol] === "X"
              ) {
                // 장애물이 있거나 공원을 벗어났다면
                // flag에 false를 넣어주고 break를 통해 for문을 종료시킨다.
                flag = false;
                break;
              }
        }
        if (flag) {
            col = tempCol;
            row = tempRow;
        }
    })
    return [row, col]
}

console.log(solution(["SOO","OOO","OOO"],["E 2","S 2","W 1"]))