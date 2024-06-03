const pizzaImg = document.querySelector('.pizzaimg');
const nameTxt = document.querySelector('.name');
const priceTxt = document.querySelector('.price');

const searchParams = new URLSearchParams(window.location.search);

let name = searchParams.get("name");
let price = searchParams.get("price");
let imgUrl = searchParams.get("imageUrl");

pizzaImg.src = imgUrl;
nameTxt.textContent = name + " pizza";
priceTxt.textContent = "Price: €" + price;

