const animation = lottie.loadAnimation({
    container: document.getElementById('coin-container'), // The container div
    renderer: 'svg', // Renders as scalable vector graphics
    loop: false,     // Disable looping for swipe interaction
    autoplay: false, // We control playback manually
    path: "../../assets/animations/plantinorteliuscoin.json", // Update with the path to your JSON
});

const balanceAnimation = lottie.loadAnimation({
    container: document.getElementById('balance'), // The container div
    renderer: 'svg', // Renders as scalable vector graphics
    path: "../../assets/animations/balance.json", // Update with the path to your JSON
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
