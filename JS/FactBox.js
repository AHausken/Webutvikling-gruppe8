
const template = document.createElement('template');
template.innerHTML = `
    <style>

    .container{
        height: 100vh;
        display: grid;
        grid-gap: 5px;
        grid-template-columns: repeat(2, 1fr);
        grid-template-rows: repeat(10, 1fr);
        border: hidden;

    }

    ::slotted(p){
        padding: 5px;
    }

    ::slotted(h3){
        padding: 5px;
    }

    div{
        border: 5px solid black;
    }
    .card1{
        background-color: green;
        grid-column: 1/2;
        grid-row: 1/3;
        
    }

    .card2{
        background-color: gold;
    }

    .card6{
        background-color: pink;
    }


    </style>


    <div class="container">

        <div class="card1">
        <slot name="fact-h1"></slot>
        <slot name="fact-c1"></slot>
        </div>

        <div class="card2">
            <slot name="fact-h2"></slot>
            <slot name="fact-c2"></slot>
        </div>

        <div class="card3">
            <slot name="fact-h3"></slot>
            <slot name="fact-c3"></slot>
        </div>

        <div class="card4">
            <slot name="fact-h4"></slot>
            <slot name="fact-c4"></slot>
        </div>

        <div class="card5">
            <slot name="fact-h5"></slot>
            <slot name="fact-c5"></slot>
        </div>

        <div class="card6">
            <slot name="fact-h6"></slot>
            <slot name="fact-c6"></slot>
        </div>

        <div class="card7">
            <slot name="fact-h7"></slot>
            <slot name="fact-c7"></slot>
        </div>

        <div class="card8">
            <slot name="fact-h8"></slot>
            <slot name="fact-c8"></slot>
        </div>

        <div class="card9">
            <slot name="fact-h9"></slot>
            <slot name="fact-c9"></slot>
        </div>

        <div class="card10">
            <slot name="fact-h10"></slot>
            <slot name="fact-c10"></slot>
        </div>

    
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

window.customElements.define('fact-box', FactBox);