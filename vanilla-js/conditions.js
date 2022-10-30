// 發送的 request 增多，即使總內容一樣，依舊會導致瀏覽器速度降低

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
