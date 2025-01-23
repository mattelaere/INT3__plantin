
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








// console.log('Shake event detected'); 

// var shakeEvent = new Shake({ threshold: 15, timeout: 1000 });
// shakeEvent.start();

// console.log('Shake event detected'); 

// window.addEventListener('shake', shakeEventDidOccur, false);

// function shakeEventDidOccur() {
//     console.log('Shake event detected'); 
//     const normalBooks = document.querySelectorAll('.normal__book');
//     const anonymousMore = document.querySelector('.anonymous__more');
//     const phoneShaker = document.querySelector('.phone__shaker');

//     let opacity = 1;
//     const interval = setInterval(() => {
//         opacity -= 0.25;
//         normalBooks.forEach(book => {
//             book.style.opacity = opacity;
//         });
//         phoneShaker.style.opacity = opacity;

//         if (opacity <= 0) {
//             clearInterval(interval);
//             anonymousMore.classList.add('visible');
//         }
//     }, 500);
//     alert('shake!');
// }






