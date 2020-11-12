const saleHeader = document.getElementById('sale-header');
const salePicture = document.getElementById('sale-picture');
const welcomeHeader = document.getElementById('welcome-header');
const WelcomePicture = document.getElementById('welcome-picture');

anime({
    targets: saleHeader,
    translateX: 800,
    duration: 8000,
    delay: 16500,
    loop: false,
    direction: "alternate"
});

anime({
    targets: salePicture,
    translateX: 800,
    duration: 8500,
    delay: 16500,
    loop: false,
    direction: "alternate"
});

anime({
    targets: welcomeHeader,
    translateY: 130,
    duration: 8000,
    delay: 500,
    direction: "alternate",
});

anime({
    targets: WelcomePicture,
    translateY: 550,
    duration: 8000,
    delay: 500,
    direction: "alternate",
});