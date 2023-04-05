function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const refs = {
  body: document.querySelector("button.change-color"),
  span: document.querySelector("span.color"),
};
const onClickBackgroundColor = () => {
  const currernBackgroundColor = getRandomHexColor();
  document.body.style.backgroundColor = `${currernBackgroundColor}`;
  refs.span.textContent = `${currernBackgroundColor}`;
};
refs.body.addEventListener("click", onClickBackgroundColor);
