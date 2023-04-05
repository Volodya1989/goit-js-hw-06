const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const listEl = document.querySelector("ul#ingredients");

const markup = ingredients
  .map((el) => `<li class="item"><img class="item">${el}</li>`)
  .join("");

listEl.insertAdjacentHTML("beforebegin", markup);
