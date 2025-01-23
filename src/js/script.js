
import { DotLottie } from '@lottiefiles/dotlottie-web';



new DotLottie({
    autoplay: false,
    loop: false,
    canvas: document.getElementById('coin-container'),
    src: "/animations/plantinorteliuscoin.json",
});

new DotLottie({
    autoplay: true,
    loop: true,
    canvas: document.getElementById('balance'),
    src: "/animations/balance.json",
});





