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
    path: "../../assets/animations/balance.json",
});

document.getElementById('coin-container').addEventListener('touchstart', (e) => {
    isDragging = true;
    startX = e.touches[0].clientX;
});

document.addEventListener('touchmove', (e) => {
    if (!isDragging) return;

    const deltaX = e.touches[0].clientX - startX;
    const progress = Math.min(Math.max(deltaX / window.innerWidth, 0), 1);

    animation.goToAndStop(progress * animation.totalFrames, true);
});

document.addEventListener('touchend', () => {
    isDragging = false;
});
