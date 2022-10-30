(function condition3() {
  const addUp = (num1, num2, num3) => {
    return num1 + num2 + num3;
  };
  // 如何使用地方套件的 addUp 函式?
  let num_of_apple = 20;
  let num_of_banana = 5;
  let num_of_grape = 10;

  const answer = addUp(num_of_apple, num_of_banana, num_of_grape);
  console.log("answer", answer);
})();

// 而且這個情況根本與第三方套件無關 => 為何有相依關係?
