const ingredients = [
    'Картошка',
    'Грибы',
    'Чеснок',
    'Помидоры',
    'Зелень',
    'Приправы',
  ];
  
  
    function getList(ingredients) {
      const listEl= document.querySelector('#ingredients');
      console.log(listEl);
      const itemEl = document.CreateElement('li');  
      listEl.appendChild(itemEl);
    
    }
      
   
    
   