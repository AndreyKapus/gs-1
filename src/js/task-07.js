const inputEl = document.getElementById('font-size-control');
const textEl = document.getElementById('text');

const fontSize = (e) => {
    textEl.style.fontSize = `${e.target.value}px`
}

inputEl.addEventListener("input", fontSize)