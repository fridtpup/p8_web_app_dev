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
        document.querySelector(".orderRef").href = `order.html?imageUrl=${imgUrl}&name=${pizzaName}&price=${pizzaPrice}`;

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
    sheet.classList.remove('sheet-out-of-view');
}

function sheetClose() {
    sheet.classList.toggle('sheet-out-of-view');
}