// Pizza json
const pizzaData = `{
    "Result": [
        {
            "id": "1",
            "name": "Pepperoni",
            "price": "17.50",
            "imgUrl": "https://www.dominos.com.sg/ManagedAssets/SG/product/PXPP/SG_PXPP_en_hero_11915.jpg?v-1996905873",
            "description": "A pizza with 4 different types of vegetarian toppings.",
            "allergies": ["soy", "milk", "gluten"],
            "ingredients": ["tomato sauce", "mozzarella", "pepperoni"],
            "type": "non-vegan"
        },
        {
            "id": "2",
            "name": "Quattro Veggi",
            "price": "15.50",
            "imgUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTWWxSErcILUQ_8gCCaFV2pndAwFqxM4_BBypkyWiMlQ&s",
            "description": "A pizza with 4 different types of vegetarian toppings.",
            "allergies": ["soy", "milk", "gluten"],
            "ingredients": ["olives", "cherry tomatoes", "mushrooms", "green pepper", "pineapple"],
            "type": "vegan"
        },
        {
            "id": "3",
            "name": "Margherita",
            "price": "3.00",
            "imgUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_umLukzwSubm8kVzmq94b58qmHGWbaWFfFjeU90VjJg&s",
            "description": "A pizza with 4 different types of vegetarian toppings.",
            "allergies": ["soy", "milk", "gluten"],
            "ingredients": ["feta cheese", "cherry tomatoes", "olives", "napolitana sauce"],
            "type": "vegan"
        },
        {
            "id": "4",
            "name": "BBQ Chicken",
            "price": "18.00",
            "imgUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ315MXgMuqHY_kvvYRcohLvXpemxF4w9YEew&s",
            "description": "A pizza with BBQ chicken, onions, and mozzarella cheese.",
            "allergies": ["soy", "milk", "gluten"],
            "ingredients": ["BBQ sauce", "chicken", "onions", "mozzarella"],
            "type": "non-vegan"
        },
        {
            "id": "5",
            "name": "Hawaiian",
            "price": "16.50",
            "imgUrl": "https://www.dominos.com.sg/ManagedAssets/SG/product/PXHW/SG_PXHW_en_hero_11915.jpg?v-1996905873",
            "description": "A pizza with ham and pineapple.",
            "allergies": ["soy", "milk", "gluten"],
            "ingredients": ["tomato sauce", "ham", "pineapple", "mozzarella"],
            "type": "non-vegan"
        },
        {
            "id": "6",
            "name": "Mexican Fiesta",
            "price": "19.00",
            "imgUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSiJbAzfeCcxPOl5U04eB-rwT9gpxauWoSdWA&s",
            "description": "A spicy pizza with jalapenos, onions, and beef.",
            "allergies": ["soy", "milk", "gluten"],
            "ingredients": ["tomato sauce", "jalapenos", "onions", "beef", "mozzarella"],
            "type": "non-vegan"
        },
        {
            "id": "7",
            "name": "Truffle Mushroom",
            "price": "21.00",
            "imgUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4y9FWkOXLgNQbBIxYPVARTOh_6mwbcXOP-w&s",
            "description": "A gourmet pizza with truffle oil and mushrooms.",
            "allergies": ["soy", "milk", "gluten"],
            "ingredients": ["truffle oil", "mushrooms", "mozzarella", "parmesan"],
            "type": "vegetarian"
        },
        {
            "id": "8",
            "name": "Spicy Veg Supreme",
            "price": "14.50",
            "imgUrl": "https://www.dominos.com.au/ManagedAssets/AU/product/P454DA/AU_P454DA_en_hero_10451.png?v-873663668",
            "description": "A pizza with a spicy kick and lots of vegetables.",
            "allergies": ["soy", "milk", "gluten"],
            "ingredients": ["tomato sauce", "jalapenos", "green peppers", "onions", "black olives", "mozzarella"],
            "type": "vegan"
        },
        {
            "id": "9",
            "name": "Seafood Delight",
            "price": "22.00",
            "imgUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPVqj_CEZPT5sk31cWUDp-T8h4Ua5gWsCkKg&s",
            "description": "A pizza with a mix of seafood toppings.",
            "allergies": ["soy", "milk", "gluten", "shellfish"],
            "ingredients": ["tomato sauce", "shrimp", "squid", "mussels", "mozzarella"],
            "type": "non-vegan"
        },
        {
            "id": "10",
            "name": "Four Cheese",
            "price": "20.00",
            "imgUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfXiNG4aX2RkKT4lFg60jg96bfGp8KKZsCzg&s",
            "description": "A pizza with four different types of cheese.",
            "allergies": ["soy", "milk", "gluten"],
            "ingredients": ["mozzarella", "cheddar", "parmesan", "blue cheese"],
            "type": "vegetarian"
        }
    ]
}`;


// Get pizza array from JSON object
const pizzas = JSON.parse(pizzaData);
pizzaArray = pizzas.Result;

// List where pizzas get put into display.
const imageList = document.querySelector(".mdc-image-list");

// Foreach loop for adding pizza elements to image list.
pizzaArray.forEach(pizza => {
    // Create and initialize components to add to list.
    const pizzaObj = document.createElement("li");
    pizzaObj.className = `all ${pizza.type} mdc-image-list__item`;

    const pizzaImg = document.createElement("img");
    pizzaImg.className = `mdc-image-list__image`;
    pizzaImg.src = `${pizza.imgUrl}`;
    pizzaImg.alt = `${pizza.name}`;

    const pizzaInfo = document.createElement("div");
    pizzaInfo.className = "pizzaInfo";

    const pizzaName = document.createElement("p");
    pizzaName.className = "pizzaName";
    pizzaName.textContent = `${pizza.name} pizza`;

    const pizzaPrice = document.createElement("p");
    pizzaPrice.className = "pizzaPrice";
    pizzaPrice.textContent = `Prijs: €${pizza.price}`;

    // Add components to list
    imageList.appendChild(pizzaObj);
    pizzaObj.appendChild(pizzaImg);
    pizzaObj.appendChild(pizzaInfo);
    pizzaInfo.appendChild(pizzaName);
    pizzaInfo.appendChild(pizzaPrice);
});



// Objects for menu drawer function.
const mainContentEl = document.querySelector('.main-content');
const menuBtn = document.querySelector('#menu');
const drawer = MDCDrawer.attachTo(document.querySelector('.mdc-drawer'));
const listEl = document.querySelector('.mdc-drawer .mdc-list');


// Objects for the filtering function.
const tabBar = new MDCTabBar(document.querySelector('.mdc-tab-bar'));
const homeBtn = document.querySelector('.mdc-top-app-bar__title');
const tabs = document.querySelectorAll('.mdc-tab-indicator');

const buttons = document.querySelectorAll('.mdc-tab');
const listItems = document.querySelectorAll('.mdc-image-list__item');


// Objects for the sheets
const close = document.querySelector('#close');
const sheet = document.querySelector('.pizzaInfoSheet');


// Objects for search function
const searchBarOpenBtn = document.querySelector('#search');
const searchBar = document.querySelector('.searchBar');
const queryBar = document.querySelector('#query');
const searchBtn = document.querySelector('#searchBtn');
let barOpen = false;




// Menu drawer function.
menuBtn.addEventListener('click', () => {
    drawer.open = true;
    searchBar.style.display = 'none';
})

listEl.addEventListener('click', (event) => {
    drawer.open = false;
});

document.body.addEventListener('MDCDrawer:closed', () => {
mainContentEl.querySelector('input, button').focus();
}); 


// Filtering tabs function.
// Upon clicking home button set the active tab to all pizza's.
homeBtn.addEventListener('click', () => {
    searchBar.style.display = 'none';
    // Removes active state on all tabs and adds it back on the 'all' tab.
    tabs.forEach(tab => {
        tab.classList.remove('mdc-tab-indicator--active');
        if (tab.id == "all") {
            tab.classList.add('mdc-tab-indicator--active');
        }
    });

    // Removes active state on all buttons and adds it back on the 'all' button.
    buttons.forEach(button => {
        button.classList.remove('mdc-tab--active');
        if (button.id == 'all') {
            button.classList.add('mdc-tab--active');
        }
    })

    // Removes hidden class on image list items so all pizzas are visible again.
    listItems.forEach(item => {
        item.classList.remove('hidden');
    })
});

// If a tab button is pressed, regarding which one got pressed hide certain image list items.
buttons.forEach(btn => {
    btn.addEventListener('click', () => {
        listItems.forEach(item => {
            console.log(item.classList)
            item.classList.add('hidden');
            if (item.classList.contains(btn.id)) item.classList.remove('hidden');
        })
    })
});



// Search function.
// Opens search bar when search icon is clicked
searchBarOpenBtn.addEventListener('click', () => {
    if(!barOpen) searchBar.style.display = 'flex'
    else searchBar.style.display = 'none'
    barOpen = !barOpen
})

// When search button within the search bar is clicked, search for pizzas containing the string contentwithing the search query 
// as long as the query is 3 or more characters long.
searchBtn.addEventListener('click', () => {
    let query = queryBar.value.toLowerCase();

    if (query.length > 2) {
        listItems.forEach(item => {
            let pizzaName = item.querySelector('.pizzaName').textContent.toLowerCase();

            item.classList.add('hidden');

            if (pizzaName.includes(query)) {
                item.classList.remove('hidden');
            }
        })
    }
})





// Sheet popup
// Objects for the sheet display and function.


// Upon clicking an item in the image list, get and show the clicked pizza and its info.

listItems.forEach(item => {
    item.addEventListener("click", () => {
        // Images
        const clickedImg = item.querySelector('img');
        const sheetImg = sheet.querySelector('img');
        const priceTxt =  document.querySelector(".priceTxt");
        const sheetHeaderTitle = sheet.querySelector('.mdc-top-app-bar__title');
        let pizzaName = "";
        let imgUrl = "";
        let pizzaPrice = "";

        sheetImg.src = clickedImg.src;
        sheetHeaderTitle.innerHTML = clickedImg.alt;

        // Text content
        const ingredientList = sheet.querySelector(".ingredients");
        const allergyList = sheet.querySelector(".allergies");

        // Reset lists
        ingredientList.innerHTML = ""; 
        allergyList.innerHTML = "";
        priceTxt.innerHTML = "";

        /*  Look for the pizza which was clicked, after finding it get its corresponding
            ingredients and allergies and display all of them within the lists. 
        */
        pizzaArray.forEach(pizza => {
            if (clickedImg.src == pizza.imgUrl)
            {
                pizza.ingredients.forEach(ingredient => {
                    const ingredientItem = document.createElement("li");
                    ingredientItem.textContent = ingredient;
                    ingredientList.append(ingredientItem);
                });

                pizza.allergies.forEach(allergy => {
                    const allergyItem = document.createElement("li");
                    allergyItem.textContent = allergy;
                    allergyList.append(allergyItem);
                })

                priceTxt.textContent = `Price: €${pizza.price}`;
                pizzaName = pizza.name;
                pizzaPrice = pizza.price;
                imgUrl = pizza.imgUrl;
            }
        });

        
        // Set link to order page using collected parameters.
        document.querySelector(".orderRef").href = `order.php?imageUrl=${imgUrl}&name=${pizzaName}&price=${pizzaPrice}`;

        // Styling for the sheet
        sheet.style.top = `${window.pageYOffset}px`;
        sheet.querySelector('header').style.top = '0';
        document.querySelector('body').style.overflow = 'hidden';

        // Open sheet
        sheetOpen();
    })
})

// Closes sheet and goes to top of the page upon clicking close button.
close.addEventListener('click', () => {
    sheetClose();
    document.querySelector('body').style.overflow = 'initial';
});

// Close/open sheet.
function sheetOpen() {
    searchBar.style.display = 'none';
    sheet.classList.remove('sheet-out-of-view');
}

function sheetClose() {
    sheet.classList.toggle('sheet-out-of-view');
}