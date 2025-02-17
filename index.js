const navToggle = document.querySelector(".nav-toggle");
const navLinks = document.querySelectorAll(".nav__link")

navToggle.addEventListener("click", () => {
    document.body.classList.toggle("nav-open");
});

navLinks.forEach(link => {
    link.addEventListener("click", () => {
        document.body.classList.remove("nav-open");
    })
})


//background
let scrollText = document.querySelector(".background-scroll-text");

window.onscroll = () => {
  let pos = window.scrollY;
  scrollText.style.left = `-${pos/2}px`;
};


//animation for span
const textArray = ["detail-oriented.", "a problem solver.", "a team player.", "creative.", "patient."];
let currentIndex = 0;
const textElement = document.querySelector(".skills");
let typingIndex = 0; 

changeText();

function changeText() {
    const currentText = textArray[currentIndex];
    typingIndex = 0; 

    typeText(currentText); 
}

function typeText(currentText) {
    if (typingIndex < currentText.length) {
        textElement.textContent += currentText.charAt(typingIndex); 
        typingIndex++;
        setTimeout(() => typeText(currentText), 150); 
    } else {
        setTimeout(() => eraseText(currentText), 1300); 
    }
}

function eraseText(currentText) {
    if (typingIndex > 0) {
        textElement.textContent = currentText.slice(0, typingIndex - 1); 
        typingIndex--;
        setTimeout(() => eraseText(currentText), 150); 
    } else {
        currentIndex = (currentIndex + 1) % textArray.length; 
        setTimeout(changeText, 350); 
    }
}