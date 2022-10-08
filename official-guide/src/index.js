import _ from "lodash";
import printMe from "./print.js";
import "./style.css";
import Icon from "./icon.png";

function component() {
  const element = document.createElement("div");
  const btn = document.createElement("button");

  // lodash（目前通过一个 script 引入）对于执行这一行是必需的
  element.innerHTML = _.join(["Hello", "webpack"], " ");
  element.classList.add("hello");

  // 将图像添加到我们现有的 div。
  var myIcon = new Image();
  myIcon.src = Icon;
  myIcon.classList.add('icon')

  element.appendChild(myIcon);

  btn.innerHTML = "Click me and check the console!";
  btn.onclick = printMe;
  element.appendChild(btn);

  return element;
}

document.body.appendChild(component());
