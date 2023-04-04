function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const refs = {
  body: document.querySelector("button.change-color"),
};
const onClickBackgroundColor = () => {
  document.body.style.backgroundColor = `${getRandomHexColor()}`;
};
refs.body.addEventListener("click", onClickBackgroundColor);
