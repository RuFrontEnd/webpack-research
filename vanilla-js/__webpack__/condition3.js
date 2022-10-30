import { addUp as add } from "./third_party_library.js";

const addUp = (num1, num2, num3) => {
  return num1 + num2 + num3;
};
// 會發現把第三方套件的變數蓋掉了 => 如果藏在其他 script 變數一多的話?
let num_of_apple = 20;
let num_of_banana = 5;
let num_of_grape = 10;

const answer = addUp(num_of_apple, num_of_banana, num_of_grape);
console.log("answer", answer);
const answer2 = add(num_of_apple, num_of_banana);
console.log("answer2", answer2);

// 而且這個情況根本與第三方套件無關 => 為何有相依關係?
