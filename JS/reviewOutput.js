
//function creating form for user reviews when button is clicked
function createForm(){
   const inputBox = document.querySelector('.form-display');
   inputBox.innerHTML = `

      
         <form role="from" class="form-re" onsubmit="addReview(event)">

         <label for="input-name">
            Navn
         </label>

         <input type="text" name="fName" placeholder="Navn" id="input-name" required>

         <label for="input-review">
            Anmeldelse
         </label>


         <textarea id="input-review"></textarea>


         <button class="show-re-Btn" type="submit">Legg til</button>

         </form>
      
      
   `;
   document.getElementById('form-display').appendChild(inputBox);

};

//Taking input from the created user review input and storing it as a string in localStorage
const addReview = e => {
   let reviewData = {
      fName: document.getElementById('input-name').value,
      review : document.getElementById('input-review').value
   }
   localStorage.setItem('reviewData', JSON.stringify(reviewData));
   e.preventDefault();
   outputReview()
}

//Retriving data from localStorage, making it in to an object and displaying it on page as review
function outputReview(){
   if(localStorage.getItem('reviewData')){
      let {fName, review} = JSON.parse(localStorage.getItem('reviewData'));
      const output = document.getElementById('output-review');
      output.innerHTML += `

         <article class="comments">
            <h3>${fName}</h3>
            <div class="stars">
               <input type="radio" id="star5">
               <label for="star5" class="fas fa-star"></label>

               <input type="radio" id="star4">
               <label for="star4" class="fas fa-star"></label>

               <input type="radio" id="star3">
               <label for="star3" class="fas fa-star"></label>

               <input type="radio" id="star2">
               <label for="star2" class="fas fa-star"></label>

               <input type="radio" id="star1">
               <label for="star1" class="fas fa-star"></label>
            </div>
            <p>${review}</p>
         </article>


   `;
   }

   document.getElementById('input-name').value = "";
   document.getElementById('input-review').value = "";
}

outputReview()