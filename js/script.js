const carousel = document.getElementById('carousel');
let position = 0;

// for duplication so as to ensure continous scroll
carousel.innerHTML += carousel.innerHTML;

function scroll() {
    // for movement by 1px
    position -= 1;
    carousel.style.transform = `translateX(${position}px)`;

    if (Math.abs(position) >= carousel.scrollWidth / 2) { position = 0 };

    const scrollId = requestAnimationFrame(scroll);

};
scroll();




// const slides = document.getElementById('slides');
// let index = 0

// function sliding() {
//     index = (index + 1) % 2
//     slides.style.transform = `translateX(-${index * 100}%)`;
//     // if (Math.abs(index) >= 1) { index = 0 }
// };

// setInterval(sliding, 3000);



const hamburger = document.getElementById("hamburger");
const menu = document.getElementById("menu");

const bar1 = document.getElementById("bar1");
const bar2 = document.getElementById("bar2");
const bar3 = document.getElementById("bar3");
isOpn = false

hamburger.addEventListener("click", () => {
    menu.classList.toggle("hidden");
    bar1.classList.toggle("rotate-45");
    bar1.classList.toggle("translate-y-1.5");

    bar2.classList.toggle("opacity-0");

    bar3.classList.toggle("-rotate-45");
    bar3.classList.toggle("-translate-y-2");
    isOpen = true
});
if (isOpen == true) {
    hamburger.addEventListener("click", () => {
        bar1.classList.toggle("-rotate-45");
        bar1.classList.toggle("-translate-y-1.5");

        bar2.classList.toggle("opacity-100");

        bar3.classList.toggle("rotate-45");
        bar3.classList.toggle("translate-y-2");
        isOpen = false
    });
};