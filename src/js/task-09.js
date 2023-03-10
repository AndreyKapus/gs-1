function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const changeColorBtnEl = document.querySelector('.change-color');
const bodyEl = document.querySelector('body');
const textEl = document.querySelector('.color')

const handleBackgroundColorChange = (e) => {
  e.preventDefault();
  let bgColor = bodyEl.style.backgroundColor
  bgColor = getRandomHexColor();
  textEl.textContent = bgColor

}

changeColorBtnEl.addEventListener('click', handleBackgroundColorChange)