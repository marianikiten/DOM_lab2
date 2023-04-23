const text = document.querySelector(".page-text")
const button = document.querySelector(".change-text")
const inputText = document.querySelector(".input-text")

button.addEventListener('click', () => {
    const newText = inputText.value;
    text.textContent = newText

})