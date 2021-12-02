function checkFirst() {
    //si valeur de firstName < 2 ou vide ou !du regex attribue true à "data-error-visible" et retourne faux
    if (firstName.value.trim().length < 2 || firstName.value.trim() === '' || !firstName.value.match(regex)) {
      firstName.parentElement.setAttribute('data-error-visible', 'true');
      return false;
      //sinon attribue false à "data-error-visible" et retourne vrai
    } else {
      firstName.parentElement.setAttribute('data-error-visible', 'false');
      return true;
    }
  }
  
  function checkLast() {
    //si valeur de lastName < 2 ou vide ou !du regex attribue true à "data-error-visible" et retourne faux
    if (lastName.value.trim().length < 2 || last.value.trim() === '' || !lastName.value.match(regex)) {
      lastName.parentElement.setAttribute('data-error-visible', 'true');
      return false;
      //sinon attribue false à "data-error-visible" et retourne vrai
    } else {
      lastName.parentElement.setAttribute('data-error-visible', 'false');
      return true;
    }
  }
  
  function checkEmail() {
    //si valeur de email match à la constante RegExp attribue false à "data-error-visible" et retourne vrai
    if (email.value.trim().match(RegExp)) {
      email.parentElement.setAttribute('data-error-visible', 'false');
      return true;
      //sinon attribue true à "data-error-visible" et retourne faux
    } else {
      email.parentElement.setAttribute('data-error-visible', 'true');
      return false;
    }
  }
  
  function checkBirthdate() {
    // valeur de birthdate !== 10 et isNAN ===true attribue true à "data-error-visible" et retourne faux
    if (birthdate.value.trim().length !== 10 || isNaN(quantity.value.trim()) === true) {
      birthdate.parentElement.setAttribute('data-error-visible', 'true');
      return false;
      //sinon attribue false à "data-error-visible" et retourne vrai
    } else{
      birthdate.parentElement.setAttribute('data-error-visible', 'false');
      return true;
    }
  }
  
  function checkQuantity() {
    //si valeur de quantity === 0 , isNaN ===true et < 0 attribue true à "data-error-visible" et retourne faux
    if (quantity.value.trim().length === 0 || isNaN(quantity.value.trim()) === true || quantity.value.trim() < 0) {
      quantity.parentElement.setAttribute('data-error-visible', 'true');
      return false;
      //sinon attribue false à "data-error-visible" et retourne vrai
    } else  {
      quantity.parentElement.setAttribute('data-error-visible', 'false');
      return true;
    }
  }
  
  function checkTermOfUse() {
    // si termOfUse validé attribue false à "data-error-visible" et retourne vrai
    if (termOfUse.checked) {
      termOfUse.parentElement.setAttribute('data-error-visible', 'false');
      return true
    } else{
      //sinon attribue true à "data-error-visible" et retourne faux
      termOfUse.parentElement.setAttribute('data-error-visible', 'true');
      return false;
    }
  }
  
  function checkLocations() {
    let locationfounded=false;
    // pour (varible i = 0 ; i < location.length ; i= i+1 
      for(let i = 0 ; i < locations.length; i++){
      //si i est coché attribue false à "data-error-visible" et retourne vrai
        if (locations[i].checked) {
            allLocations.setAttribute('data-error-visible', 'false');
            locationfounded=true;
            break;
            //sinon attribue true à "data-error-visible" et retourne faux
        } else {
          allLocations.setAttribute('data-error-visible', 'true');
        }
      }
  
      return locationfounded;
  }