
import { DotLottie } from '@lottiefiles/dotlottie-web';
gsap.registerPlugin(ScrollTrigger);
const $draggableItems = document.querySelectorAll('.robbery__images img[draggable="true"]');
const $dropBox = document.getElementById('drop-box');
const $robberyText = document.getElementById('robbery-text');
const $robberyArrow = document.querySelector('.robbery__arrow');
const $robberyTextImage = document.querySelector('.robbery__text');
let droppedItemsCount = 0;
const $books = document.querySelectorAll('.normal__book');
const $coin = document.querySelector('.the__coin');
const mediaQuery = window.matchMedia("(min-width: 48em)");

gsap.from(".slide__over", {
    y: 300,
    scrollTrigger: {
        trigger: ".detective__logo__bg",
        start: "top bottom",
        end: "top 10%",

        scrub: true,
    }

});


const changeLanguage = (language) => {
    const translations = {
        english: {
            p1: "Despite the suspicions, Plantin managed to avoid severe punishment. His greatest defense was the Polyglot Bible, a massive project funded by King Philip II of Spain.",
            p2: "This masterpiece, completed in 1573, showcased Plantin’s loyalty to the Catholic Church. It included texts in Hebrew, Greek, Latin, and Aramaic and was seen as a triumph of Catholic scholarship.",
            p3: "The Polyglot Bible’s success protected Plantin’s reputation. It allowed him to keep his position as Royal Printer, even as questions about his other activities lingered."
        },
        latin: {
            p1: "Quamvis suspiciones, Plantinus gravi poena vitare curavit. Praecipua eius defensio fuit Biblia Polyglotta, magnum consilium a rege Philippo II Hispaniarum.",
            p2: "Hoc magisterium, anno 1573 confectum, ostendit Plantin fidelitatem erga Ecclesiam catholicam. Textus hebraici, graeci, latini et aramaici comprehendit et catholicae eruditionis triumphus visus est.",
            p3: "Successus Polyglottae Bibliorum opinionem Plantin custodivit. Permisit ei ut Typographus Regius suam dignitatem teneret, etiam interrogationes de aliis actionibus suis morantibus."
        },
        hebrew: {
            p1: "למרות החשדות, פלנטין הצליח להימנע מעונש חמור. ההגנה הגדולה ביותר שלו הייתה תנך פוליגלוט, פרויקט ענק שמומן על ידי מלך ספרד פיליפ השני.",
            p2: "יצירת מופת זו, שהושלמה בשנת 1573, הציגה את נאמנותו של פלנטין לכנסייה הקתולית. הוא כלל טקסטים בעברית, יוונית, לטינית וארמית ונראה כניצחון של למדנות קתולית.",
            p3: "הצלחתו של תנך פוליגלוט הגנה על המוניטין של פלנטין.זה איפשר לו לשמור על מעמדו כדפיס המלכותי, גם כששאלות על פעילויות אחרות שלו התמהמהו."
        },
        greek: {
            p1: "Παρά τις υποψίες, ο Plantin κατάφερε να αποφύγει την αυστηρή τιμωρία.Η μεγαλύτερη υπεράσπισή του ήταν το Polyglot Bible, ένα τεράστιο έργο που χρηματοδοτήθηκε από τον βασιλιά Φίλιππο Β' της Ισπανίας.",
            p2: "Αυτό το αριστούργημα, που ολοκληρώθηκε το 1573, ανέδειξε την πίστη του Plantin στην Καθολική Εκκλησία.Περιλάμβανε κείμενα στα εβραϊκά, ελληνικά, λατινικά και αραμαϊκά και θεωρήθηκε ως θρίαμβος της καθολικής επιστήμης",
            p3: " Η επιτυχία της Βίβλου Polyglot προστάτευσε τη φήμη του Plantin.Του επέτρεψε να διατηρήσει τη θέση του ως Βασιλικός Εκτυπωτής, ακόμη και όταν παρέμεναν ερωτήματα σχετικά με τις άλλες δραστηριότητές του."
        },
        aramaic: {
            p1: "ܒܠܚܘܬܐ ܕܚܘܪܠܐ، ܦܠܢܛܝܢ ܐܝܬܐ ܠܐ ܠܒܘܢܐ ܚܕܐ ܕܐܪܚܪܢܐ. ܚܘܒܪܐ ܕܐܝܬܐ ܒܪܘܪܐ ܗܘܐ ܗܘܐ ܡܘܪܚܐ ܕܚܕܐ ܕܝܠܗ ܗܘܐ ܐܝܟ ܦܘܠܓܘܠܐ ܒܝܐܒܠܐ، ܕܒܪܐ ܚܕܐ ܠܚܒܘܪܐ ܕܡܠܟܐ ܦܝܠܝܦ ܒܘܗܪܐ ܡܢ ܐܣܦܐ ܕܐܬܪܐ.",
            p2: "ܗܢܐ ܢܚܬܐ، ܕܡܫܬܬܐ ܒܫܢܬ 1573، ܐܘܟܕܐ ܕܦܠܢܛܝܢ ܠܪܘܡܢܘܬܐ ܠܟܬܘܠܝܩܐ. ܗܘܐ ܐܝܟ ܢܘܚܪܐ ܕܐܬܪܐ ܒܗܪܘܬܐ، ܓܪܘܣܝܐ، ܠܐܛܝܢ، ܘܐܪܡܝܐ ܘܐܝܬ ܚܕܐ ܦܘܠܓܘܠܐ ܕܟܬܘܠܝܩܐ ܥܡ ܩܕܡܘܢܐ.",
            p3: "ܚܘܒܪܐ ܕܡܠܬܐ ܕܩܪܢܐ ܐܢܐ ܒܘܪܟܐ ܕܦܠܢܛܝܢ ܗܘܐ ܕܥܘܕܐ. ܗܘܐ ܐܩܪ ܐܢܐ ܕܚܘܪܐ ܐܒܘܬ ܐܪܡܠܐ ܒܘܪܟܐ، ܐܝܟ ܕܢܘܓܕܘܬܐ ܗܘܐ ܠܪܘܡܢܘܬܐ ܕܐܚܪܐ."
        }
    };

    document.querySelector('.alibi__p1').textContent = translations[language].p1;
    document.querySelector('.alibi__p2').textContent = translations[language].p2;
    document.querySelector('.alibi__p3').textContent = translations[language].p3;

    document.querySelectorAll('.alibi__languages p').forEach(el => {
        el.classList.remove('active-language');
    });
    document.querySelector(`.alibi__${language}`).classList.add('active-language');
};



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







$draggableItems.forEach(item => {
    item.addEventListener('dragstart', (e) => {
        e.dataTransfer.setData('text/plain', e.target.id);
    });
});

$dropBox.addEventListener('dragover', (e) => {
    e.preventDefault();
    $dropBox.classList.add('drag-over');
});

$dropBox.addEventListener('drop', (e) => {
    e.preventDefault();
    $dropBox.classList.remove('drag-over');
    const id = e.dataTransfer.getData('text/plain');
    const $draggableElement = document.getElementById(id);
    if ($draggableElement && !$draggableElement.classList.contains('dropped')) {
        $draggableElement.classList.add('dropped');
        $draggableElement.style.display = 'none';
        droppedItemsCount++;
        if (droppedItemsCount === $draggableItems.length) {
            $robberyText.style.display = 'block';
            $robberyArrow.classList.add('hidden');
            $robberyTextImage.classList.add('grow');
            $dropBox.classList.add('hidden');
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
    document.getElementById('vase').classList.remove('hidden');
    document.getElementById('goblet').classList.remove('hidden');
    document.getElementById('violin').classList.remove('hidden');
    document.getElementById('harp').classList.remove('hidden');
    document.getElementById('drop-box').classList.remove('hidden');
    document.querySelector('.anonymous__instructions__desk').classList.remove('hidden');
    document.querySelector('.robbery__arrow').classList.remove('hidden');
    document.querySelector('.anonymous__more').classList.add('hidden');
    document.querySelector('.robbery__p').classList.add('hidden');
    document.querySelector('.tapper').classList.remove('hidden');
    document.querySelector('.phone__shaker').classList.remove('hidden');
    document.querySelector('.tablet__shaker').classList.remove('hidden');
    document.querySelector('.alibi__english').classList.remove('hidden');
    document.querySelector('.verdict__section').classList.remove('guilty');
    document.querySelector('.verdict__section').classList.remove('innocent');

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



    document.querySelector('.innocent__btn').addEventListener('click', () => {
        document.querySelector('.verdict__section').classList.remove('guilty');
        document.querySelector('.verdict__section').classList.add('innocent');
    });
        document.querySelector('.guilty__btn').addEventListener('click', () => {
            document.querySelector('.verdict__section').classList.remove('innocent');
            document.querySelector('.verdict__section').classList.add('guilty');
        });

    if (mediaQuery.matches) {
        document.querySelector('.alibi__english').addEventListener('click', () => changeLanguage('english'));
        document.querySelector('.alibi__latin').addEventListener('click', () => changeLanguage('latin'));
        document.querySelector('.alibi__hebrew').addEventListener('click', () => changeLanguage('hebrew'));
        document.querySelector('.alibi__greek').addEventListener('click', () => changeLanguage('greek'));
        document.querySelector('.alibi__aramaic').addEventListener('click', () => changeLanguage('aramaic'));
        changeLanguage('english');
        document.querySelector('.alibi__english').classList.add('active-language');
    }


};

init();







