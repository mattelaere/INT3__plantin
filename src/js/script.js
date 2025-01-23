
import { DotLottie } from '@lottiefiles/dotlottie-web';





new DotLottie({
    autoplay: true,
    loop: true,
    canvas: document.querySelector('.balance canvas'),
    src: `${import.meta.env.BASE_URL}animations/balance.json`,
});



new DotLottie({
    autoplay: false,
    loop: false,
    canvas: document.querySelector('.coin canvas'),
    src: `${import.meta.env.BASE_URL}animations/thecoin.json`,
    
});




