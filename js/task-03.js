const images = [
    {
      url:
        'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      alt: 'White and Black Long Fur Cat',
    },
    {
      url:
        'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
    },
    {
      url:
        'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      alt: 'Group of Horses Running',
    },
  ];

  document.querySelector('#gallery').insertAdjacentHTML('afterbegin',
    images.map((item) => {
        return `<li><img width="100px" border="1" src="${item.url}" alt="${item.alt}"/></li>`
    }).join()
)
  /*const listGalleryEl = document.querySelector('#gallery');
  listGalleryEl.classList.add('gallery-list');
  images.forEach((src) => {
    let itemGalleryEl = document.createElement('li');
    itemGalleryEl.classList.add('gallery-item');
    itemGalleryEl.url = src;
    console.log(itemGalleryEl);
    const imageEl = document.createElement('img');
imageEl.classList.add('gallery-item__img');
imageEl.getAttribute('alt');
console.log(itemGalleryEl);
    itemGalleryEl.appendChild(imageEl);



listGalleryEl.appendChild(itemGalleryEl);
  });
   /*
  const imageEl = documet.createElement('img');
imageEl.classList.add('gallery-item__img');
imageEl.getAttribute('alt');
 itemGalleryEl.appendChild(imageEl);
  const imageEl = documet.createElement('img');
imageEl.classList.add('gallery-item__img');
imageEl.getAttribute('alt');
imageEl.image = src;*/
  



  