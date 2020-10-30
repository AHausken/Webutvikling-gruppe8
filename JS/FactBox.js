
const template = document.createElement('template');
template.innerHTML = `
    <style>

    .container{
        height: 100vh;
        display: grid;
        grid-gap: 5px;
        grid-template-columns: repeat(1, 1fr);
        grid-template-rows: repeat(20, 1fr);
        border: hidden;

    }

    ::slotted(p){
        padding: 5px;
    }

    ::slotted(h3){
        padding: 5px;
    }

    ::slotted(iframe){
        width: 100%;
    }

    ::slotted(img){
        width: 100%;
    }

    div{
        border: 5px solid black;
    }

    .header{
        grid-column: 1/1;
        grid-row: 1/1;
        text-align: center;
    }

    .card1{
        background-color: darkcyan;
    }

    .card2{
        background-color: gold;

    }

    .card3{
        background-color: silver;
    }

    .card4{
        background-color: olive;
    }

    .card5{
        background-color: salmon;
    }

    .card6{
        background-color: red;
    }

    .card7{
        background-color: grey;
    }

    .card8{
        background-color: pink;
    }

    .card9{
        background-color: white;
    }

    .card10{
        background-color: green;
    }


    </style>


    <div class="container">

        <h1 class="header">
            <slot name="header"></slot>
        </h1>

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
    }
}

window.customElements.define('fact-box', FactBox);