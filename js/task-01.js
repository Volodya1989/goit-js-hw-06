console.log(`======================Task-1===========================`);

//variable for total number of categories
const numberOfCat = document.querySelector("ul#categories").children.length;

//variables for the names of categories and total nubmer of elements
const nameOfTheCategory = document.querySelectorAll("li.item h2");
const numberOfElements = document.querySelectorAll("li.item ul");

//displaying total number of categories
console.log(`Number of categories: ${numberOfCat}`);
console.log("\n");

//iterating and displaying categories and total number of elements
for (let i = 0; i < numberOfCat; i += 1) {
  console.log(`Category: ${nameOfTheCategory[i].textContent}`);
  console.log(`Elements: ${numberOfElements[i].children.length}`);
  console.log("\n");
}

