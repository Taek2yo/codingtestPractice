process.stdin.setEncoding('utf8');
process.stdin.on('data', data => {
    const n = data.split(" ");
    const a = Number(n[0]), b = Number(n[1]);
    //가로 별 a 만큼 찍어줘
    let star_row = '*'.repeat(a)
    // 
    for (let i = 0; i < b; i++) {
    console.log(star_row); // 세로에 찍어줘 
  }
}); 