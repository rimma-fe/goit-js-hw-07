
const Refs = {
    input: document.querySelector('#name-input'),
    span: document.getElementById('name-output'),
};
Refs.input.addEventListener('input', () => {
    let name = Refs.input.value.trim();
    if (name.length > 0) {
        Refs.span.textContent = name;
    } else {
        Refs.span.textContent = 'незнакомец';
    }
});