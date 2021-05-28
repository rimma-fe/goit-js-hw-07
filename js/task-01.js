
console.log(document.querySelectorAll('#categories > li.item li').length);
document.querySelectorAll('#categories > li.item').forEach((item) => {
    console.log(item.querySelector('h2').innerText)
    console.log(item.querySelectorAll('li').length)
})
