

const template = document.createElement('template');
template.innerHTML = `


    <style>
        .fact-card{
            font-family: 'Arial', sans-serif;
            background: #f4f4f4;
            width: 10vw
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            grid-gap: 10px;
            margin-bottom: 15px;
            border: 2px solid green;
        }

        h3, p{
            padding: 10px;
        }

        img{
            width: 100%
        }

    </style>


    <div class="fact-card">
            <img />
            <div>
            <h3></h3>
            <p></p>
            </div>
    </div

`;

class FactBox extends HTMLElement{
    constructor(){
        super();

        this.attachShadow({mode: 'open'});
        this.shadowRoot.appendChild(template.content.cloneNode(true));
        this.shadowRoot.querySelector('h3').innerText = this.getAttribute('title');
        this.shadowRoot.querySelector('p').innerText = this.getAttribute('info');
        this.shadowRoot.querySelector('img').src = this.getAttribute('pic');

    }
}

window.customElements.define('fact-box', FactBox);