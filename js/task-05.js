//getting elements
const refs = {
  inputValue: document.querySelector("input#name-input"),
  outputValue: document.querySelector("span#name-output"),
};

//callback function
const onInput = (event) => {
  const currentVal = event.currentTarget.value;
  refs.outputValue.textContent = currentVal;
  if (!currentVal.length) {
    refs.outputValue.textContent = "Anonymous";
  }
};

//eventListener for input field
refs.inputValue.addEventListener("input", onInput);
