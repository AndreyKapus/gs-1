const counterEl = document.getElementById("counter");
const buttonEl = document.getElementsByTagName('button');
const buttonDecrementEl = buttonEl[0];
const buttonIncrementEl = buttonEl[1];


let input = document.getElementById('value');

let counterValue = 0;

const handleDectement = (e) => {
    e.preventDefault()
    counterValue -= 1;
    input.textContent = counterValue;
}

const handleIncrement = (e) => {
    e.preventDefault()
    counterValue += 1;
    input.textContent = counterValue;
}

const decrement = buttonDecrementEl.addEventListener('click', handleDectement)

const increment = buttonIncrementEl.addEventListener('click', handleIncrement)