
import { DotLottie } from '@lottiefiles/dotlottie-web';
gsap.registerPlugin(ScrollTrigger);




gsap.from(".slide__over", {
    y: 300,
    scrollTrigger: {
        trigger: ".detective__logo__bg",
        start: "top bottom",
        end: "top 10%",

        scrub: true,
    }

});


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






const draggableItems = document.querySelectorAll('.robbery__images img[draggable="true"]');
const dropBox = document.getElementById('drop-box');
const robberyText = document.getElementById('robbery-text');
const robberyArrow = document.querySelector('.robbery__arrow');
const robberyTextImage = document.querySelector('.robbery__text');
let droppedItemsCount = 0;


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



draggableItems.forEach(item => {
    item.addEventListener('dragstart', (e) => {
        console.log('Drag start:', e.target.id);
        e.dataTransfer.setData('text/plain', e.target.id);
    });
});

dropBox.addEventListener('dragover', (e) => {
    e.preventDefault();
    dropBox.classList.add('drag-over');
    console.log('Drag over');
});

dropBox.addEventListener('drop', (e) => {
    e.preventDefault();
    dropBox.classList.remove('drag-over');
    const id = e.dataTransfer.getData('text/plain');
    console.log('Drop:', id);
    const draggableElement = document.getElementById(id);
    if (draggableElement && !draggableElement.classList.contains('dropped')) {
        draggableElement.classList.add('dropped');
        draggableElement.style.display = 'none';
        droppedItemsCount++;
        console.log('Dropped items count:', droppedItemsCount);
        if (droppedItemsCount === draggableItems.length) {
            robberyText.style.display = 'block';
            robberyArrow.classList.add('hide');
            robberyTextImage.classList.add('grow');
            dropBox.classList.add('hide');
            setTimeout(() => {
                robberyArrow.classList.add('hidden');
                dropBox.classList.add('hidden');
            }, 300);
        }
    }
});

const requestT = () => {
    document.querySelector(".shake__button").classList.add('hidden');

    if (typeof DeviceMotionEvent.requestPermission === 'function') {
        DeviceMotionEvent.requestPermission()
            .then(response => {
                if (response == 'granted') {
                    window.addEventListener('devicemotion', handleDeviceMotion, false);
                }
            })
            .catch(console.error);
    } else {
        window.addEventListener('devicemotion', handleDeviceMotion);
    }
};


const handleDeviceMotion = (e) => {
    if (window.innerWidth < 48 * 16) { // 48em in pixels
        const anonymousSection = document.querySelector('.anonymous__interaction__section');
        const rect = anonymousSection.getBoundingClientRect();
        const isVisible = rect.top >= 0 && rect.bottom <= window.innerHeight;

        if (isVisible && (e.rotationRate.alpha > 256 || e.rotationRate.beta > 256 || e.rotationRate.gamma > 256)) {
            document.querySelectorAll('.normal__book').forEach(img => {
                img.classList.add('hide');
            });
            document.querySelector('.anonymous__more').style.display = 'block';
        }
    }
};


const init = () => {
    document.querySelector(".shake__button").addEventListener("click", requestT);
};


init();







