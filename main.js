import "./style.css";
import javascriptLogo from "./javascript.svg";
import viteLogo from "/vite.svg";
import { setupCounter } from "./counter.js";

document.querySelector("#app").innerHTML = `
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
      <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
    </a>
    <h1>Hello Vite!</h1>
    <div class="card">
      <button id="counter" type="button"></button> 
      <button id="counter2" type="button"></button> 
    </div>
    <p class="read-the-docs">
      Click on the Vite logo to learn more
    </p>
  </div>
`;
let counter = 0;
const element = document.getElementById("counter");
const element2 = document.getElementById("counter2");

element.addEventListener("click", () => {
  counter++;
  element.innerHTML = `count is ${counter}`;
  element2.innerHTML = `count is ${counter}`;
});

element2.addEventListener("click", () => {
  counter--;
  element.innerHTML = `count is ${counter}`;
  element2.innerHTML = `count is ${counter}`;
});
