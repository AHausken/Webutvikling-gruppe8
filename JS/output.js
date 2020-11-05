
const output = document.getElementById('food-section');
const inputP = document.getElementById('inputP');
const filterPris = document.getElementById('filter-pris');



const showFood = () => {
    foodSection(getFood);
}

const filterPrice = () => {
    let priceArray = getFood.filter( food => food.price < inputP.value);
    if(inputP.value == ""){
        alert('Vennligst oppgi en max pris');
        getFood();
    }
    foodSection(priceArray);
}

const foodSection = (array) => {
    let htmlTxt = "";
    array.forEach( food => {
        htmlTxt += `
        <article>
        <img id="food-sec" src="Bilder/${ food.imageSrc }">
        <h3>${food.name}</h3>
        <p>${food.info}</p>
        <p> Pris: ${food.price} kr</p>
        </article>
        `;
    });
    output.innerHTML = htmlTxt;
}

showFood();


filterPris.addEventListener('click', filterPrice);










/*
const showFood = () =>{
    let htmlTxt = "";
    meals.forEach( food => {
        htmlTxt += `
        <article>
        <img id="food-sec" src="Bilder/${ food.imageSrc }">
        <h3>${food.name}</h3>
        <p>${food.info}</p>
        <p> Pris: ${food.price} kr</p>
        </article>
        `;
    });
    output.innerHTML = htmlTxt;
}

const filterPrice = () => {
    let prisArray = meals.filter( meals => meals.price < 100);

    let htmlTxt = "";
    prisArray.forEach( food => {
        htmlTxt += `
        <article>
        <img id="food-sec" src="Bilder/${ food.imageSrc }">
        <h3>${food.name}</h3>
        <p>${food.info}</p>
        <p> Pris: ${food.price} kr</p>
        </article>
        `;
    });
    output.innerHTML = htmlTxt;
    
}
*/