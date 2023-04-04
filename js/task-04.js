//getting btn elements
const btnDecr = document.querySelector("button[data-action='decrement']");
const btnIncr = document.querySelector("button[data-action='increment']");

//getting value to be changed in UI
const counterValue = document.querySelector("#value");

//fucntion to decrement counterValue
const decr = () => {
  counterValue.textContent = parseInt(counterValue.textContent) - 1;
};

//fucntion to increment counterValue
const incr = () => {
  counterValue.textContent = parseInt(counterValue.textContent) + 1;
};

//event listeners
btnDecr.addEventListener("click", decr);
btnIncr.addEventListener("click", incr);
