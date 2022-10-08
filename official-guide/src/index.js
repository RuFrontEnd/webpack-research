import printMe from "./print.js";
import "./style.css";
import Icon from "./icon.png";

function getComponent() {
  return import("lodash")
    .then(({ default: _ }) => {
      const element = document.createElement("div");
      const btn = document.createElement("button");

      element.innerHTML = _.join(["Hello", "webpack"], " ");
      element.classList.add("hello");

      // 将图像添加到我们现有的 div。
      var myIcon = new Image();
      myIcon.src = Icon;
      myIcon.classList.add("icon");

      element.appendChild(myIcon);

      btn.innerHTML = "Click me and check the console!";
      btn.onclick = printMe;
      element.appendChild(btn);

      return element;
    })
    .catch((error) => "An error occurred while loading the component");
}

getComponent().then((component) => {
  document.body.appendChild(component);
});
