//variables
let carouselSlide = document.querySelector(".carousel-container");
let carouselImages = document.querySelectorAll(".carousel-slide img")
let imageLink = document.querySelector('a')

let counter = 1;
let projectNumber = document.getElementById("project-number");

function resetStyling() {
    document.querySelectorAll(".nav-events").forEach(item => {
        item.style = "";
        item.classList.remove('acme-btn')
    })
}


//event listeners
document.querySelector(".acme-btn").addEventListener('click', () => {
    resetStyling();
    console.log("hej")
    carouselSlide.innerHTML = `
    <a href="https://acmeevents.netlify.app/" target="_blank">
    <img src="./jpg/acme1.png" alt="acme event page 1">
    </a>
    `
    projectNumber.innerHTML = "01/03"
    event.target.style.transform = 'skew(-20deg)'
    event.target.style.textDecoration = 'line-through'
    event.target.style.color = '#9b980f'
});
document.querySelector(".quiz-btn").addEventListener('click', () => {
    resetStyling();
    console.log("hej")
    carouselSlide.innerHTML = `
    <a href="https://quizquiz.netlify.app/" target="_blank">
    <img src="jpg/quiz1.png" alt="quiz1 page 1">
    <a/>
    `;
    projectNumber.innerHTML = "02/03"
    event.target.style.transform = 'skew(-20deg)'
    event.target.style.textDecoration = 'line-through'
    event.target.style.color = '#9b980f'

});
document.querySelector(".yatzy-btn").addEventListener('click', () => {
    resetStyling();
    console.log("hej")
    carouselSlide.innerHTML = `
    <a href="https://yatzyyatzy.netlify.app/" target="_blank">
    <img src="jpg/yatzy1.png">
    <a/>`;
    projectNumber.innerHTML = "03/03"
    event.target.style.transform = 'skew(-20deg)'
    event.target.style.textDecoration = 'line-through'
    event.target.style.color = '#9b980f'
});