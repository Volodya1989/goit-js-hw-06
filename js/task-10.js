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
let numOfElements = null;
let markup = "";
let widthNum = 20;

const onInput = (event) => {
  numOfElements = event.currentTarget.value;
};

const onClickCreate = () => {
  if (numOfElements === null) {
    window.alert("Enter a number please.");
  }
  for (let i = 0; i < numOfElements; i += 1) {
    widthNum += 10;
    markup += `<div class = "item${
      i + 1
    }" style="background-color:${getRandomHexColor()}; width:${widthNum}px; height:${widthNum}px;"></div>`;
  }
  if (document.querySelector(".item1")) {
    return window.alert(
      "Please DELETE previous set of created elements to create new set of 'div's'"
    );
  }

  refs.insertBox.insertAdjacentHTML("afterbegin", markup);
};

const onClickDestroy = (event) => {
  const confirmDeletion = window.confirm("Confirm to DELETE all colorful elements that you have created?");
  if (confirmDeletion) {
    refs.insertBox.innerHTML = "";
    markup = "";
    widthNum = 20;
  } 
  
};

refs.inputNum.addEventListener("input", onInput);

refs.createBtn.addEventListener("click", onClickCreate);

refs.destroyBtn.addEventListener("click", onClickDestroy);
