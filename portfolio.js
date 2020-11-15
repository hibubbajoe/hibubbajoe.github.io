//variables
let carouselSlide = document.querySelector(".carousel-slide");
let carouselImages = document.querySelectorAll(".carousel-slide img")
let size = carouselImages[0].width;
let counter = 1;
let projectNumber = document.getElementById("project-number");

//goes back and forth in carousel 
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
}
function resetStyling() {
    document.querySelectorAll(".nav-events").forEach(item => {
        item.style = "";
        item.classList.remove('acme-btn')
    })
}

//event listeners
document.querySelector(".acme-btn").addEventListener('click', () => {
    resetStyling();
    carouselSlide.innerHTML =
        `<img src="jpg/acme4.png" id="lastClone" alt="acme event page 4">
        <img src="jpg/acme1.png" alt="acme event page 1">
        <img src="jpg/acme2.png" alt="acme event page 2">
        <img src="jpg/acme3.png" alt="acme event page 3">
        <img src="jpg/acme4.png" alt="acme event page 4">
        <img src="jpg/acme1.png" id="firstClone" alt="acme event page 1">`;
    projectNumber.innerHTML = "01/03"
    event.target.style.transform = 'skew(-20deg)'
    event.target.style.textDecoration = 'line-through'
    event.target.style.color = '#9b980f'
    updateSlide();
});
document.querySelector(".quiz-btn").addEventListener('click', () => {
    resetStyling()
    carouselSlide.innerHTML =
        `<img src="jpg/quiz4.png" id="lastClone" alt="quiz game page 4">
        <img src="jpg/quiz1.png" alt="quiz game page 1">
        <img src="jpg/quiz2.png" alt="quiz game page 2">
        <img src="jpg/quiz3.png" alt="quiz game page 3">
        <img src="jpg/quiz4.png" alt="quiz game page 4">
        <img src="jpg/quiz1.png" id="firstClone" alt="quiz game page 1">`;
    projectNumber.innerHTML = "02/03"
    event.target.style.transform = 'skew(-20deg)'
    event.target.style.textDecoration = 'line-through'
    event.target.style.color = '#9b980f'
    updateSlide();
});
document.querySelector(".yatzy-btn").addEventListener('click', () => {
    resetStyling();
    carouselSlide.innerHTML =
        `<img src="jpg/yatzy2.png" id="lastClone" alt="yatzy page 2">
        <img src="jpg/yatzy1.png" alt="yatzy page 1">
        <img src="jpg/yatzy2.png" alt="yatzy page 2">
        <img src="jpg/yatzy1.png" id="firstClone" alt="yatzy page 1">`;
    projectNumber.innerHTML = "03/03"
    event.target.style.transform = 'skew(-20deg)'
    event.target.style.textDecoration = 'line-through'
    event.target.style.color = '#9b980f'
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
