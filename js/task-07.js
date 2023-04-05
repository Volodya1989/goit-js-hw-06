const refs = {
  textToChange: document.querySelector("span#text"),
  colorPicker: document.querySelector("input#font-size-control"),
};

const onLoad = () => {
  refs.textToChange.style.fontSize = `${refs.colorPicker.value}px`;
};
const onInputPicker = (event) => {
  refs.textToChange.style.fontSize = `${event.currentTarget.value}px`;
};

window.addEventListener("load", onLoad);
refs.colorPicker.addEventListener("input", onInputPicker);
