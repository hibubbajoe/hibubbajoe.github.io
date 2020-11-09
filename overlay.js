let overlay = document.getElementById("contactOverlay");
let contact = document.getElementById("contact");

contact.addEventListener("click", function () {
    openOverlay();
});

overlay.addEventListener("click", function (e) {
    if (e.target.nodeName !== "A") {
        closeOverlay()
    }
})

//shows overlay 
function openOverlay() {
    overlay.classList.remove("hidden")
}

//closes overlay
function closeOverlay() {
    overlay.classList.add("hidden")
}   