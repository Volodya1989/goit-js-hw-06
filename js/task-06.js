const refs = {
  inputValue: document.querySelector("input#validation-input"),
};

refs.inputValue.addEventListener("blur", (event) => {
    //length of symbols that was typed and removing spaces
    const currentLengthOfSymbols = event.currentTarget.value.trim().length;
    
    //condition to check for six characters
  if (currentLengthOfSymbols === 6) {
    refs.inputValue.classList.remove("invalid");

    refs.inputValue.classList.add("valid");
  } else if (
    (currentLengthOfSymbols > 6 || currentLengthOfSymbols < 6) &&
    currentLengthOfSymbols !== 0
  ) {
    refs.inputValue.classList.remove("valid");

    refs.inputValue.classList.add("invalid");
  } else {
    refs.inputValue.classList.remove("invalid");
    refs.inputValue.classList.remove("valid");
  }
});
