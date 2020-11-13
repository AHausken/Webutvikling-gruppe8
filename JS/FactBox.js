
const template = document.createElement('template');
template.innerHTML = `
    <style>

    .container{
        height: 100vh;
        display: grid;
        grid-gap: 5px;
        grid-template-columns: repeat(1, 1fr);
        grid-template-rows: repeat(9, 1fr);
        border: hidden;
        padding: 5px;

    }

    ::slotted(p){
        padding: 5px;
    }

    ::slotted(h3){
        padding: 5px;
    }

    ::slotted(iframe){
        width: 100%;
        border-radius: 3%;
    }

    ::slotted(img){
        width: 100%;
        border-radius: 3%;
    }

    div{
        border: 4px solid black;
        border-radius: 3%;
    }

    .header{
        grid-column: 1/3;
        grid-row: 1/2;
        text-align: center;
    }

    .card1{
        background-color: darkcyan;
        grid-column: 1/3;
        grid-row: 2/3;
        font-size: 1.3em;
    }

    .card2{
        background-color: gold;
        grid-column: 1/3;
        grid-row: 3/4;
        font-size: 1.2em;
        

    }

    .card3{
        background-color: silver;
        grid-column: 1/3;
        font-size: 1.3em;
    }

    .card4{
        background-color: olive;
        grid-column: 1/3;
        font-size: 1.3em;
    }

    .card5{
        background-color: blue;
        grid-column: 1/3;
        font-size: 1.2em;
    }

    .card6{
        background-color: white;
        grid-column: 1/3;
    }

    .card7{
        background-color: brown;
        grid-column: 1/3;
        font-size: 1.3em;
    }

    .card8{
        background-color: white;
        grid-column: 1/3;
    }

    .card9{
        background-color: black;
        grid-column: 1/3;
    }

    @media screen and (max-width: 1700px){
        .container{
            display: grid;
            grid-template-columns: repeat(6, 1fr);
            grid-template-rows: repeat(10, 1fr);
    }

    .header{
        grid-column: 1/7;
        grid-row: 1/2;
    }

    .card1{
        background-color: darkcyan;
        grid-column: 1/7;

    }

    .card2{
        background-color: gold;
        grid-column: 1/4;

    }

    .card3{
        background-color: silver;
        grid-column: 4/7;
    }

    .card4{
        background-color: olive;
        grid-column: 1/7;
    }

    .card5{
        background-color: salmon;
        grid-column: 4/7;
    }

    .card6{
        background-color: white;
        grid-column: 4/7;
        grid-row: 6/7;

    }

    .card7{
        background-color: brown;
        grid-column: 1/4;
        grid-row: 5/6;
    }

    .card8{
        background-color: white;
        grid-column: 1/4;
    }

    .card9{
        grid-column: 1/7;
    }
}



    @media screen and (max-width: 992px){
            .container{
                display: grid;
                grid-template-columns: repeat(4, 1fr);
                grid-template-rows: repeat(10, 1fr);
        }
    
        .header{
            grid-column: 1/5;
            grid-row: 1/2;
        }

        ::slotted(p){
            padding: 5px;
            font-size: 3.5vw;
        }

        ::slotted(ul){
            font-size: 3.5vw;
        }
    
        ::slotted(h3){
            padding: 5px;
        }

        .card1{
            background-color: darkcyan;
            grid-column: 1/5;
            grid-row: 2/3;
        }
    
        .card2{
            background-color: gold;
            grid-column: 1/5;
    
        }
    
        .card3{
            background-color: silver;
            grid-column: 1/5;
            grid-row: 4/5
        }
    
        .card4{
            background-color: olive;
            grid-column: 1/5;
            grid-row: 5/6;
        }
    
        .card5{
            background-color: pink;
            grid-column: 3/5;
        }
    
        .card6{
            background-color: red;
            grid-column: 3/5;
            grid-row: 7/8;
        }
    
        .card7{
            background-color: green;
            grid-column: 1/3;
            grid-row: 6/7;
        }
    
        .card8{
            background-color: blue;
            grid-column: 1/3;
        }

        .card9{
            grid-column: 1/5;
        }
    }

    @media screen and (max-width: 560px){
        .container{
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            grid-template-rows: repeat(10, 1fr);
    }

    .header{
        grid-column: 1/4;
        grid-row: 1/2;
    }

    ::slotted(p){
        padding: 5px;
        font-size: 5vw;
    }

    ::slotted(ul){
        font-size: 5vw;
    }

    ::slotted(h3){
        padding: 5px;
    }

    .card1{
        background-color: darkcyan;
        grid-column: 1/4;

    }

    .card2{
        background-color: gold;
        grid-column: 1/4;
    }

    .card3{
        background-color: silver;
        grid-column: 1/4;
    }

    .card4{
        background-color: olive;
        grid-column: 1/4;
    }

    .card5{
        background-color: pink;
        grid-column: 1/4;
    }

    .card6{
        background-color: white;
        grid-column: 1/4;
    }

    .card7{
        background-color: brown;
        grid-column: 1/4;
    }

    .card8{
        background-color: white;
        grid-column: 1/4;
    }

    .card9{
        grid-column: 1/4;
    }
}

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


