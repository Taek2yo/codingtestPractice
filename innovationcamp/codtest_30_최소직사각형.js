function solution(sizes) {
    var answer = 0;
    let W = 0;
    let H = 0;
    
    for (let size of sizes) {
        // 가로와 세로 중 더 긴 것
        const A = size[0] < size[1] ? size[1] : size[0]; 
        // 가로와 세로 중 더 짧은 것
        const B = size[0] < size[1] ? size[0] : size[1];
        
        // 가로의 길이가 가로와 세로중 긴 것 보다 작으면 A 아니면 W
        // 세로의 길이가 가로와 세로중 짧은 것 보다 작으면 B 아니면 H
        // = > W,H 최신화
        W = W < A ? A : W;
        H = H < B ? B : H;
    }
    answer = W * H;
    return answer;
}