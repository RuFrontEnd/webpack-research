export default function printMe() {
  return import("lodash").then(({ default: _ }) => {
    console.log("I get called from print.js!");
  });
}
