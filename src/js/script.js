
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


const coinAnimation = new DotLottie({
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






const $draggableItems = document.querySelectorAll('.robbery__images img[draggable="true"]');
const $dropBox = document.getElementById('drop-box');
const $robberyText = document.getElementById('robbery-text');
const $robberyArrow = document.querySelector('.robbery__arrow');
const $robberyTextImage = document.querySelector('.robbery__text');
let droppedItemsCount = 0;
const $books = document.querySelectorAll('.normal__book');
const $coin = document.querySelector('.the__coin');


document.querySelector('.guilty__btn').addEventListener('click', () => {
    const $verdictSection = document.querySelector('.verdict__section');
    $verdictSection.classList.remove('innocent');
    $verdictSection.classList.add('guilty');
});

document.querySelector('.innocent__btn').addEventListener('click', () => {
    const $verdictSection = document.querySelector('.verdict__section');
    $verdictSection.classList.remove('guilty');
    $verdictSection.classList.add('innocent');
});



$draggableItems.forEach(item => {
    item.addEventListener('dragstart', (e) => {
        console.log('Drag start:', e.target.id);
        e.dataTransfer.setData('text/plain', e.target.id);
    });
});

$dropBox.addEventListener('dragover', (e) => {
    e.preventDefault();
    $dropBox.classList.add('drag-over');
    console.log('Drag over');
});

$dropBox.addEventListener('drop', (e) => {
    e.preventDefault();
    $dropBox.classList.remove('drag-over');
    const id = e.dataTransfer.getData('text/plain');
    console.log('Drop:', id);
    const $draggableElement = document.getElementById(id);
    if ($draggableElement && !$draggableElement.classList.contains('dropped')) {
        $draggableElement.classList.add('dropped');
        $draggableElement.style.display = 'none';
        droppedItemsCount++;
        console.log('Dropped items count:', droppedItemsCount);
        if (droppedItemsCount === $draggableItems.length) {
            $robberyText.style.display = 'block';
            $robberyArrow.classList.add('hide');
            $robberyTextImage.classList.add('grow');
            $dropBox.classList.add('hide');
            setTimeout(() => {
                $robberyArrow.classList.add('hidden');
                $dropBox.classList.add('hidden');
            }, 300);
        }
    }
});



const revealAnonymousSection = () => {
    $books.forEach(book => {
        book.classList.add('hidden');
    });
    document.querySelector(".anonymous__more").classList.remove('hidden');
    document.querySelector(".phone__shaker").classList.add('hidden');
    document.querySelector(".tablet__shaker").classList.add('hidden');
};

const shake = () => {
    document.querySelector(".shake__button").classList.add('hidden');
    if (typeof DeviceMotionEvent.requestPermission === 'function') {
        DeviceMotionEvent.requestPermission()
            .then(response => {
                if (response == 'granted') {
                    window.addEventListener('devicemotion', (e) => {
                        if ((e.rotationRate.alpha > 256 || e.rotationRate.beta > 256 || e.rotationRate.gamma > 256)) {
                            revealAnonymousSection();
                        }
                    }, false)
                }
            })
            .catch(console.error)
    } else {
        window.addEventListener('devicemotion', (e) => {
            if ((e.rotationRate.alpha > 256 || e.rotationRate.beta > 256 || e.rotationRate.gamma > 256)) {
                revealAnonymousSection();
            }
        })
    }
}

const hoverBooks = () => {
    let hoverCount = 0;
    $books.forEach(book => {
        book.addEventListener('mouseover', () => {
            hoverCount++;
            if (hoverCount >= $books.length) {
                document.querySelector('.anonymous__instructions__desk').classList.add('hidden');
                revealAnonymousSection();
            }
        });
    });
};




const init = () => {
    document.querySelector('.anonymous__more').classList.add('hidden');
    document.querySelector('.tapper').classList.remove('hidden');
    if (window.innerWidth < 48 * 16) {
        document.querySelector(".shake__button").addEventListener("click", shake);
    } else {
        hoverBooks();
    }
   
    const handleClick = () => {
        coinAnimation.play();
        document.querySelector('.tapper').classList.add('hidden');
        $coin.removeEventListener('click', handleClick); // Remove the event listener to make it irreversible
    };
    $coin.addEventListener('click', handleClick);
};

init();







