
  const ingredients = [
    'Картошка',
    'Грибы',
    'Чеснок',
    'Помидоры',
    'Зелень',
    'Приправы',
  ];
  
   
      const listEl = document.querySelector('#ingredients');
      console.log(listEl);

      
    const listItemEl = ingredients.map(ingredient => {
      const liItemEl = document.CreateElement('li'); 
        listItemEl.classList.add('ingredients-list__item');

        return liItemEl;
    });
    console.log(listItemEl);
    listEl.append(...listItemEl);

  
      
   
    
   