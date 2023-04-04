//getting btn elements
const btnDecr = document.querySelector("button[data-action='decrement']");
const btnIncr = document.querySelector("button[data-action='increment']");

//getting value to be changed in UI
const counterValue = document.querySelector("#value");

//fucntion to decrement counterValue
const onClickDecrement = () => {
  counterValue.textContent = parseInt(counterValue.textContent) - 1;
};

//fucntion to increment counterValue
const onClickIncrement = () => {
  counterValue.textContent = parseInt(counterValue.textContent) + 1;
};

//event listeners
btnDecr.addEventListener("click", onClickDecrement);
btnIncr.addEventListener("click", onClickIncrement);
