import "./style.css";

let counter = 0;
document.querySelector("#app").innerHTML = `
  <div>
    
  <h1 id="numero">
  ${counter}
  </h1>
    <div class="card">
      <button id="counter" type="button">Suma</button> 
      <button id="counter2" type="button">Resta</button> 
      <button id="counter3" type="button">Reiniciar</button> 
    </div>
 
     
  </div>
`;
const element = document.getElementById("counter");
const element2 = document.getElementById("counter2");
const element3 = document.getElementById("counter3");
const numero = document.querySelector("#numero");
coloreando();
element.addEventListener("click", () => {
  counter++;
  numero.textContent = counter;
  coloreando();
});

element2.addEventListener("click", () => {
  counter--;
  numero.textContent = counter;
  coloreando();
});
element3.addEventListener("click", () => {
  counter = 0;
  numero.textContent = counter;
  coloreando();
});
function coloreando() {
  if (counter > 0) {
    numero.style.color = "green";
  } else if (counter < 0) {
    numero.style.color = "red";
  } else numero.style.color = "pink";
}
