function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const refs = {
  createBtn: document.querySelector("button[data-create]"),
  destroyBtn: document.querySelector("button[data-destroy]"),
  inputNum: document.querySelector("#controls input"),
  insertBox: document.querySelector("div#boxes"),
};
let markup = "";
let widthNum = 20;

const createBoxes = (num) => {
  for (let i = 0; i < num; i += 1) {
    widthNum += 10;
    markup += `<div class = "item${
      i + 1
    }" style="background-color:${getRandomHexColor()}; width:${widthNum}px; height:${widthNum}px;"></div>`;
  }
  if (document.querySelector(".item1")) {
    refs.inputNum.value = "";

    return window.alert(
      "Please DELETE previous set of created elements to create new set of 'div's'"
    );
  }
};

const onClickCreate = () => {
  let numOfElements = refs.inputNum.value;

  if (numOfElements === "") {
    return window.alert("Enter a number please.");
  }

  createBoxes(numOfElements);

  refs.insertBox.insertAdjacentHTML("afterbegin", markup);
  refs.inputNum.value = "";
  refs.inputNum.disabled = true;
};

const destroyBoxes = () => {
  refs.insertBox.innerHTML = "";
  refs.inputNum.value = "";
  markup = "";
  widthNum = 20;
  refs.inputNum.disabled = false;
};

refs.createBtn.addEventListener("click", onClickCreate);
refs.destroyBtn.addEventListener("click", destroyBoxes);
