const sushi1 = document.getElementById('sushi1');
const sushi2 = document.getElementById('sushi2');
const sushi3 = document.getElementById('sushi3');
const sushi4 = document.getElementById('sushi4');
const chef = document.getElementById('winMan');
const text = document.getElementById('winText');

const winAnimation = () =>{
        anime({
        targets: sushi1,
        translateY: 1500,
        duration: 11000,
        delay: 2100,
        loop: true
        });

    anime({
        targets: sushi2,
        translateY: 1500,
        duration: 11000,
        delay: 1200,
        loop: true
        });

    anime({
        targets: sushi3,
        translateY: 1500,
        duration: 11000,
        delay: 1500,
        loop: true
        });

    anime({
        targets: sushi4,
        translateY: 1500,
        duration: 11000,
        delay: 500,
        loop: true
        });

        anime({
            targets: chef,
            translateY: -450,
            duration: 13000
            });
    
        anime({
            targets: text,
            translateY: -200,
            duration: 15000,
            delay: 500
            });
    };

