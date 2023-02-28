const formEl = document.querySelector('.login-form');

const onFormSubmit = (e) => {
    e.preventDefault();
    const {elements: {email, password}} = e.currentTarget;

    if (email.value === '' || password.value === '') {
        alert("заполни поле")
    };
    const object = {email: email.value, password: password.value};
    console.log(object);
    e.currentTarget.reset()
}

formEl.addEventListener('submit', onFormSubmit)
