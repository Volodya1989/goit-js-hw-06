const refs = {
  textToChange: document.querySelector("span#text"),
  colorPicker: document.querySelector("input#font-size-control"),
};

const onInputPicker = (event) => {
  refs.textToChange.style.fontSize = `${event.currentTarget.value}px`;
};

refs.colorPicker.addEventListener("input", onInputPicker);
