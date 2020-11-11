//variables
let carouselSlide = document.querySelector(".carousel-slide");
let carouselImages = document.querySelectorAll(".carousel-slide img")
let size = carouselImages[0].width;
let counter = 1;
let projectNumber = document.getElementById("project-number");

function nextImage() {
    if (counter >= carouselImages.length - 1) return;
    carouselSlide.style.transition = "transform 0.4s ease-in-out";
    counter++;
    carouselSlide.style.transform = 'translateX(' + (-size * counter) + "px)";
    console.log("jag går framåt")
}

function prevImage() {
    if (counter <= 0) return;
    carouselSlide.style.transition = "transform 0.4s ease-in-out";
    counter--;
    carouselSlide.style.transform = 'translateX(' + (-size * counter) + "px)";
    console.log("jag går bakåt")
}

function updateSlide() {
    //reseting counter to 1 after chaning img's
    counter = 1;
    //updating the amount of img's in slide
    carouselImages = document.querySelectorAll(".carousel-slide img")

    //starting on the first image
    carouselSlide.style.transform = 'translateX(' + (-size * counter) + "px)";
    console.log(carouselImages.length)
}

//event listeners   
document.querySelector(".acme-btn").addEventListener('click', () => {
    carouselSlide.innerHTML =
        `<img src="jpg/acme4.png" id="lastClone" alt>
        <img src="jpg/acme1.png" alt>
        <img src="jpg/acme2.png" alt>
        <img src="jpg/acme3.png" alt>
        <img src="jpg/acme4.png" alt>
        <img src="jpg/acme1.png" id="firstClone" alt>`;
    projectNumber.innerHTML = "01/03"
    updateSlide();
});
document.querySelector(".quiz-btn").addEventListener('click', () => {
    carouselSlide.innerHTML =
        `<img src="jpg/quiz3.png" id="lastClone" alt>
        <img src="jpg/quiz1.png" alt>
        <img src="jpg/quiz2.png" alt>
        <img src="jpg/quiz3.png" alt>
        <img src="jpg/quiz1.png" id="firstClone" alt>`;
    projectNumber.innerHTML = "02/03"
    updateSlide();
});
document.querySelector(".yatzy-btn").addEventListener('click', () => {
    carouselSlide.innerHTML =
        `<img src="jpg/yatzy2.png" id="lastClone" alt>
        <img src="jpg/yatzy1.png" alt>
        <img src="jpg/yatzy2.png" alt>
        <img src="jpg/yatzy1.png" id="firstClone" alt>`;
    projectNumber.innerHTML = "03/03"
    updateSlide();
});

document.querySelectorAll(".nextBtn").forEach(item => {
    item.addEventListener('click', () => {
        nextImage();
    })
})
document.querySelectorAll(".prevBtn").forEach(item => {
    item.addEventListener('click', () => {
        prevImage();
    })
})

carouselSlide.addEventListener('transitionend', () => {

    if (carouselImages[counter].id === 'lastClone') {
        carouselSlide.style.transition = 'none';
        counter = carouselImages.length - 2;
        carouselSlide.style.transform = 'translateX(' + (-size * counter) + "px)";
    }
    if (carouselImages[counter].id === 'firstClone') {
        carouselSlide.style.transition = 'none';
        counter = carouselImages.length - counter;
        carouselSlide.style.transform = 'translateX(' + (-size * counter) + "px)";
    }
})

updateSlide();
