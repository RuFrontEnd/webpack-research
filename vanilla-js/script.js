// 情境一
// 小明今天有 10 顆蘋果和 5 根香蕉
// 請問他總共有多少個水果?

let num_of_apple = 10;
let num_of_banana = 5;

const answer = addUp(num_of_apple, num_of_banana);
// console.log("answer", answer);

// 情境二
// 小華今天有 20 顆葡萄
// 分給小玉、小吳、小哲、小呈
// 請問一個人可以分到多少顆葡萄?

let num_of_grape = 20;
let num_of_people = 5;

// const answer = divide(num_of_grape, num_of_people);
// console.log("answer", answer);

// 我想要不同情境的兩個答案都叫 answer 不行嗎?
// 我想要做到兩件事情:
// 1. 分開情境一跟情境二的作用域
// 2. 將情境一跟情境二拆為不同的 js file 做管理

(function condition1() {
  let num_of_apple = 10;
  let num_of_banana = 5;

  const answer = addUp(num_of_apple, num_of_banana);
  console.log("answer", answer);
})();

(function condition2() {
  let num_of_grape = 20;
  let num_of_people = 5;

  const answer = divide(num_of_grape, num_of_people);
  console.log("answer", answer);
})();

// IIFE 幫我們分開作用域了 很好
// 但當拆成兩個 JS 管理 condition 的時候，同樣內容卻會大幅降低 request 速度
// 第二件事情是說，今天就是因為兩個情境不相依才拆成兩個 JS 檔，為何還要 IIFE 包著去分隔作用域
// 這邊得到一個結論，原生 JS 的管理方式不適合多腳本載入，且作用域管理混亂

// 另外 condition 1 2 3 根本沒有用到 subtract 和 multiply => 為何需要載入
