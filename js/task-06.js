document.getElementById("validation-input").onblur = function() {
    console.log(this.value.length);
    if ((parseInt(this.getAttribute('data-length')) === this.value.length)) { 
      this.classList.add('valid');
      
    } else {
      this.classList.add('invalid');
      this.classList.remove('valid');
    }
    };
  


  