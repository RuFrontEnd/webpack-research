import { divide } from "./third_party_library.js";

let num_of_grape = 20;
let num_of_people = 5;

const answer = divide(num_of_grape, num_of_people);
console.log("answer", answer);

// 示範一下拿掉 IIFE 後會發生什麼
