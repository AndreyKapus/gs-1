const inputEl = document.getElementById('validation-input');
console.log(inputEl)
const onInputChange = (e) => {
    e.preventDefault()
    const dataLength = Number(inputEl.getAttribute('data-length'));
   

    if (dataLength > e.target.value.length) {
        inputEl.classList.add('invalid')
    } else {    
        inputEl.classList.remove("invalid");
        inputEl.classList.add("valid")}

}

const input = inputEl.addEventListener('blur', onInputChange)