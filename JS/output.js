
const output = document.getElementById('food-section');
const inputP = document.getElementById('inputP');
const filterPris = document.getElementById('filter-pris');
const filter = document.querySelector('.fa-filter');




const showFood = () => {
    foodSection(getFood);
}

const showFilters = () => {

        inputP.style.visibility = "visible";
        filterPris.style.visibility = "visible";
} 

const filterPrice = () => {
    let priceArray = getFood.filter( food => food.price < inputP.value);
    foodSection(priceArray);
}

const foodSection = (array) => {
    let htmlTxt = "";
    array.forEach( food => {
        htmlTxt += `

        <article>
        <img id="food-sec" src="Bilder/${ food.imageSrc }">
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

showFood();


filterPris.addEventListener('click', filterPrice);
filter.addEventListener('click', showFilters);
