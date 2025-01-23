
import { DotLottie } from '@lottiefiles/dotlottie-web';



new DotLottie({
    autoplay: false,
    loop: false,
    canvas: document.getElementById('coin-container'),
    src: "/animations/plantinorteliuscoin.json",
});



const balanceAnimation = lottie.loadAnimation({
    container: document.getElementById('balance'), 
    renderer: 'svg',
    path: "../../public/animations/balance.json",
});



