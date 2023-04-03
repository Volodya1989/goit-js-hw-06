const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];
//getting element
const galEl = document.querySelector(".gallery");

//creating map of li and img tags using array
const markup = images
  .map(({ url, alt }) => `<li class="item"><img class="img-item" src=${url} alt=${alt} width='300' height="175"></li>`)
  .join("");

//adding elements to the DOM
galEl.insertAdjacentHTML("afterbegin", markup);
