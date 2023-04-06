const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const listEl = document.querySelector("ul#ingredients");

const elem = [];
ingredients.map((el) => {
  const ingredientEl = document.createElement("li");
  ingredientEl.textContent = el;
  ingredientEl.classList.add("item");
  elem.push(ingredientEl);
});

listEl.append(...elem);
