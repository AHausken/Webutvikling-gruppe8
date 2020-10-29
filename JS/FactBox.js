const template = document.createElement('template');
template.innerHTML = `


    <style>
        .fact-card{
            border: 4px solid black;
            background-color: green;
            height: 100vh
        }

        @media screen and (max-device-width: 767px){
        }
    </style>

    <div class="fact-card">

        <h3></h3>
        <p></p>

    
    </div>

            

        

`;

class FactBox extends HTMLElement{
    constructor(){
        super();

        this.attachShadow({mode: 'open'});
        this.shadowRoot.appendChild(template.content.cloneNode(true));
        this.shadowRoot.querySelector('h3').innerText = this.getAttribute('name');
        this.shadowRoot.querySelector('p').innerText = this.getAttribute('info');
    }
}

window.customElements.define('fact-box', FactBox)