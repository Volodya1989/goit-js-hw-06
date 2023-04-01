const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const listEl = document.querySelector("ul#ingredients");

ingredients.forEach((el) => {

  const ingredientEl = document.createElement("li");
  ingredientEl.textContent = el;
  ingredientEl.classList.add("item");
  
  return listEl.append(ingredientEl);

});
