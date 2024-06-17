// Object variables for pizza info.
const pizzaImg = document.querySelector('.pizzaimg');
const nameTxt = document.querySelector('.name');
const priceTxt = document.querySelector('.price');

// Parameters from URL to fetch specific pizza data.
const searchParams = new URLSearchParams(window.location.search);

let name = searchParams.get("name");
let price = searchParams.get("price");
let imgUrl = searchParams.get("imageUrl");

// Set pizza information within objects.
pizzaImg.src = imgUrl;
nameTxt.textContent = name + " pizza";
priceTxt.textContent = "Price: €" + price;

// Set hidden input field value to pizza name for placing order in DB.
const pizzaType = document.getElementById('pizza');
pizzaType.value = name;

