
 
  
   
  const ingredients = [
    'Картошка',
    'Грибы',
    'Чеснок',
    'Помидоры',
    'Зелень',
    'Приправы',
  ];
  const ulEl= document.querySelector('#ingredients');
  
      const elements = ingredients.map(value => {
        const ulItem =document.createElement('li');
        console.log(ulItem);
        ulItem.textContent = value

      return ulItem;
      }
       
  );
 console.log(elements);
  ulEl.append(...elements); 
 
   
    
   