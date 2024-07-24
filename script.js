const navDiaolog = document.getElementById('nav-diolog');
function handleMenu() {
    console.log('first');
    navDiaolog.classList.toggle('hidden');
}
// --^ code is used to change the button of mobile screen of navbar


const intialTranslateLTR = -48*4;
const intialTranslateRTL = 36*4;
function setupIntersectionObserver(element, isLTR, speed) {
    const intersectionCallback = (entries) => {
        const isIntersecting = entries[0].isIntersecting;
        console.log(element, isIntersecting);

        if(isIntersecting) {
            document.addEventListener('scroll', scrollHandler);
        } else {
            document.addEventListener('scroll', scrollHandler);
        }
    }
    const intersectionObserver = new IntersectionObserver(intersectionCallback)
    intersectionObserver.observe(element);

    function scrollHandler() {
        const translateX = (window.innerHeight - element.getBoundingClientRect().top) * speed;

        let totalTranslate = 0;
        if(isLTR) {
            totalTranslate = translateX + intialTranslateLTR;
        } else {
            totalTranslate = -(translateX + intialTranslateRTL);
        }

        element.style.transform = `translateX(${totalTranslate}px)`;
    }
}


const line1 = document.getElementById('line1'); 
const line2 = document.getElementById('line2'); 
const line3 = document.getElementById('line3');
const line4 = document.getElementById('line4');

setupIntersectionObserver(line1, true, 0.15);
setupIntersectionObserver(line2, false, 0.15);
setupIntersectionObserver(line3, true, 0.15);
setupIntersectionObserver(line4, true, 0.5);

const dtElements = document.querySelectorAll('dt');
dtElements.forEach(element => {
    element.addEventListener('click', () => {
        const ddId = element.getAttribute('aria-controls');
        const ddElement = document.getElementById(ddId);
        const ddArrowIcon = ddElement.querySelectorAll('i');

        ddElement.classList.toggle('hidden');
        ddArrowIcon.classList.toggle('-rotate-180');
    })
})