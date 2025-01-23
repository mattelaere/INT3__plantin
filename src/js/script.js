const animation = lottie.loadAnimation({
    container: document.getElementById('coin-container'), 
    renderer: 'svg', 
    loop: false,     
    autoplay: false, 
    path: "../../public/animations/plantinorteliuscoin.json", 
});

const balanceAnimation = lottie.loadAnimation({
    container: document.getElementById('balance'), 
    renderer: 'svg',
    path: "../../public/animations/balance.json",
});



