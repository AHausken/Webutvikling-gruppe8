const template = document.createElement('template');
template.innerHTML = `


    <style>
        .fact-card{
            border: 4px solid red;
            margin-bottom: 10px;
            height: 99vh;
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