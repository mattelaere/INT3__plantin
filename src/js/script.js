
import { DotLottie } from '@lottiefiles/dotlottie-web';




new DotLottie({
    autoplay: false,
    loop: false,
    canvas: document.querySelector('.the__coin canvas'),
    src: `${import.meta.env.BASE_URL}animations/known__coin.json`,

});

new DotLottie({
    autoplay: true,
    loop: true,
    canvas: document.querySelector('.balance canvas'),
    src: `${import.meta.env.BASE_URL}animations/balance.json`,
});







