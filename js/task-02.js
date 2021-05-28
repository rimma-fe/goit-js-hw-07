
 
  
   
  const ingredients = [
    'Картошка',
    'Грибы',
    'Чеснок',
    'Помидоры',
    'Зелень',
    'Приправы',
  ];
  const ulEL= document.querySelector('#ingredients');
  ingredients.forEach((value) => {
      let element = document.createElement('li');
      element.textContent = value
      ulEL.appendChild(element);
  });
  
      
   
    
   