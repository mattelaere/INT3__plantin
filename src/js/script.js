
import { DotLottie } from '@lottiefiles/dotlottie-web';
const draggableItems = document.querySelectorAll('.robbery__images img[draggable="true"]');
const dropBox = document.getElementById('drop-box');
const robberyText = document.getElementById('robbery-text');
const robberyArrow = document.querySelector('.robbery__arrow');
const robberyTextImage = document.querySelector('.robbery__text');
let droppedItemsCount = 0;

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



draggableItems.forEach(item => {
    item.addEventListener('dragstart', dragStartHandler);
});

dropBox.addEventListener('dragover', dragOverHandler);
dropBox.addEventListener('drop', dropHandler);

function dragStartHandler(e) {
    console.log('Drag start:', e.target.id);
    e.dataTransfer.setData('text/plain', e.target.id);
}

function dragOverHandler(e) {
    e.preventDefault();
    dropBox.classList.add('drag-over');

}

function dropHandler(e) {
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
}