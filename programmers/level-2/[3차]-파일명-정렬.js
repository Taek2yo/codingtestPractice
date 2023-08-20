// https://school.programmers.co.kr/learn/courses/30/lessons/17686

function solution(files) {
  const RegEx = /^([a-zA-Z-\. ]+)([0-9]+)(.*)$/;
  // RegEx example => HEAD: "img" NUMBER: "12" TAIL: ".png
  let arr = [];
  files.forEach((el, idx) => {
    let [fn, head, num] = el.match(RegEx);
    arr.push({ fn, head: head.toLowerCase(), num: parseInt(num), idx });
  });
  return arr
    .sort((a, b) => {
      return a.head === b.head ? a.num - b.num : a.head < b.head ? -1 : 1;
    })
    .map((item) => item.fn);
}

console.log(solution( ["img12.png", "img10.png", "img02.png", "img1.png", "IMG01.GIF", "img2.JPG"]))