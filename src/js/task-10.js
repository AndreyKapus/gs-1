function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const inputEl = document.querySelector('input');
const btnCreate = document.querySelector('[data-create]');
const btnDestroy = document.querySelector('[data-destroy]');
const boxesEl = document.getElementById('boxes')

function createBoxes(amount) {

  let divchick = document.createElement('div');
  let elements = divchick += amount;
  console.log(divchick)
  boxesEl.insertAdjacentHTML('afterbegin', elements)
}

const inp = inputEl.addEventListener('input', createBoxes)
btnCreate.addEventListener('click', createBoxes)