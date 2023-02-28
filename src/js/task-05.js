const inputEl = document.getElementById('name-input')
let textEl = document.getElementById('name-output')

const onInputChange = (e) => {
    e.preventDefault();
    textEl.textContent = e.currentTarget.value;
}

const input = inputEl.addEventListener('input', onInputChange)