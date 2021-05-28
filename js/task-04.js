
const btn = {
    sub: document.querySelector("[data-action='increment']"),
    add: document.querySelector("[data-action='decrement']"),
    span: document.querySelector('#value'),
    wrapper: document.querySelector('#counter '),
  };
  let counterValue = 0;
  const increment = () => {
    counterValue += 1;
  
    document.getElementById('value').textContent = counterValue;
  };
  
  const decrement = () => {
    counterValue -= 1;
  
    document.getElementById('value').textContent = counterValue;
  };
  btn.sub.addEventListener('click', increment);
  btn.add.addEventListener('click', decrement);