
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


const addReview = e => {
   let reviewData = {
      fName: document.getElementById('input-name').value,
      review : document.getElementById('input-review').value
   }
   localStorage.setItem('reviewData', JSON.stringify(reviewData));
   e.preventDefault();
   outputReview()
}

function outputReview(){
   if(localStorage.getItem('reviewData')){
      let {fName, review} = JSON.parse(localStorage.getItem('reviewData'));
      const output = document.getElementById('output-review');
      output.innerHTML += `

         <article class="comments">
            <h3>${fName}</h3>
            <p>${review}</p>
         </article>


   `;
   }

   document.getElementById('input-name').value = "";
   document.getElementById('input-review').value = "";
}

outputReview()