
import { DotLottie } from '@lottiefiles/dotlottie-web';
import {shake} from 'shake.js'

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

document.querySelector('.guilty__btn').addEventListener('click', () => {
    const verdictSection = document.querySelector('.verdict__section');
    verdictSection.classList.remove('innocent');
    verdictSection.classList.add('guilty');
});

document.querySelector('.innocent__btn').addEventListener('click', () => {
    const verdictSection = document.querySelector('.verdict__section');
    verdictSection.classList.remove('guilty');
    verdictSection.classList.add('innocent');
});




