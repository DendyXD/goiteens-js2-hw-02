// Завдання 1

const sliderInput = document.querySelector(".slider__input");

const sliderImage = document.querySelector(".slider__image")

sliderInput.addEventListener("input", _.debounce((sliderImageHandler), 300))

function sliderImageHandler() {
    sliderImage.style.rotate = `${sliderInput.value}deg`;
}

// Завдання 2

const boxField = document.querySelector("#box-field");
const box = document.querySelector("#box")

boxField.addEventListener('mousemove', _.debounce((event) => {
    box.style.top = `${event.offsetY}px`
    box.style.left = `${event.offsetX}px`
}, 300));