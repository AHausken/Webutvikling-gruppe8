//Getting the id and classes from fancysushi.html
const output = document.getElementById('food-section');
const inputP = document.getElementById('inputP');
const filterPris = document.getElementById('filter-pris');
const filter = document.querySelector('.fa-filter');
const lowFilter = document.querySelector('#filter-low-high');
const highFilter = document.querySelector('#filter-high-low');




const showFood = () => {
    foodSection(getFood);
}

//Filter section is hidden when entering page, when filter icon is clicked filter section is visible
const showFilters = () => {

        inputP.style.visibility = "visible";
        filterPris.style.visibility = "visible";
        lowFilter.style.visibility = "visible";
        highFilter.style.visibility = "visible";
} 

//Filtering array price using input number box and displaying it via foodSection function
const filterPrice = () => {
    let priceArray = getFood.filter( food => food.price < inputP.value);
    foodSection(priceArray);
}

//Sorting array price and displaying lowes price first, displaying it via foodSection function
const lowPrice = () => {
    let sortLow = getFood.sort((a,b) => (a.price > b.price ? 1 : -1));
    foodSection(sortLow);
}

//Sorting array price and displaying highest price first, displaying it via foodSection function
const highPrice = () => {
    let sortHigh = getFood.sort((a,b) => (a.price < b.price ? 1 : -1));
    foodSection(sortHigh);
}

//Accsessing getFood and pasing each object through forEach and giving each obj name, info, image and price
const foodSection = (array) => {
    let htmlTxt = "";
    array.forEach( food => {
        htmlTxt += `

        <article>
        <img id="food-sec" src="Bilder/${ food.imageSrc }" alt="Bilde av rett FOTO">
        <h3>${food.name}</h3>
        <button class="order">Bestill</button>
        <p>${food.info}</p>
        <p>${food.soda}</p>
        <p> Pris: ${food.price} kr</p>
        </article>
        `;
    });
    output.innerHTML = htmlTxt;
}

//Displaying food when entering page
showFood();

//Click events
filterPris.addEventListener('click', filterPrice);
filter.addEventListener('click', showFilters);
lowFilter.addEventListener('click', lowPrice);
highFilter.addEventListener('click', highPrice);
