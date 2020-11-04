
var output = document.getElementById('food-section');

meals.forEach(function(food){
    output.innerHTML += `
    <article>
    <img id="food-sec" src="Bilder/${ food.imageSrc }">
    <h3>${food.name}</h3>
    <p>${food.info}</p>
    <p> Pris: ${food.price} kr</p>
    </article>
    `;
});