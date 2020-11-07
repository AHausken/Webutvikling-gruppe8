
function createForm(){
   const inputBox = document.getElementById('form-display');
   inputBox.innerHTML = `
      <article>
        <input type="text" placeholder="Navn" id="input-name">
        <input type="text" placeholder="Skriv en anmeldelse" id="input-review">
        <input type="button" onclick="inputButton()" value="Send inn" id="input-button">
      </article>
   `;
   document.getElementById('form-display').appendChild(inputBox);

};



function inputButton(){
   
   const inputName = document.getElementById('input-name').value;
   const inputReview = document.getElementById('input-review').value;
   const outputReview = document.getElementById('output-review');
  
   outputReview.innerHTML += `
      <article class="comments">
         <h3>${inputName}</h3>
         <i class="fas fa-star"></i> <i class="fas fa-star"></i>  <i class="fas fa-star"></i>
         <p>${inputReview}</p>
      </article>
      
   `;


};
