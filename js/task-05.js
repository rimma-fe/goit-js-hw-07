const Refs = {
    input: document.querySelector('#name-input'),
    span: document.getElementById('name-output'),
}


Refs.input.addEventListener('input', (event) => {
    if (event.target.value.length > 0) {
        Refs.span.textContent = event.target.value;
    } else if (event.target.value === '') {
        Refs.span.textContent = 'незнакомец';
    }
});