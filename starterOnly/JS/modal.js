

// DOM ELEMENTS MODAL 
const modalbg = document.querySelector('.bground');
const modalBtn = document.querySelectorAll('.modal-btn');
const formData = document.querySelectorAll('.formData');
const closeBtn = document.getElementsByClassName('close');
const form = document.getElementById('formModal');
const modalTh = document.querySelector('#thanks');
const closeBtnTh = document.querySelector('.btn-closeModal');
const regex = /^[a-zA-ZÀ-ÖØ-öø-ÿ]+$/;
const firstName = document.getElementById('first');
const lastName = document.getElementById('last');
const email = document.getElementById('email');
const RegExp = '^[a-zA-Z0-9.-_]+[@]{1}[a-zA-Z0-9.-_]+[.]{1}[a-z]{2,10}$';
const birthdate = document.getElementById('birthdate');
const quantity = document.getElementById('quantity');
const allLocations = document.getElementById('allLocations');
const locations = document.getElementsByName('location');
const termOfUse = document.getElementById('termOfUse');


// ------ DISPLAY MODAL ------ //
// LAUNCH MODAL EVENTS
modalBtn.forEach((btn) => btn.addEventListener('click', launchModal));
// LAUNCH MODAL FORM
function launchModal() {
  modalbg.style.display = 'block';
}
// CLOSE MODAL FORM CROSS
// au click sur le bouton close premier le la liste applique la fonction closeModal (qui fait un display none sur les modales)
closeBtn [0].addEventListener('click', closeModal);
function closeModal() {
  modalbg.style.display = 'none';
  modalTh.style.display = 'none';
}
//--------THANKS MODAL---------//

//CLOSE CROSS 
closeBtn [1].addEventListener('click', closeModalTh);

//CLOSE MODAL 
closeBtnTh.addEventListener('click',closeModalTh);
function closeModalTh() {
    modalTh.style.display = 'none';
    modalbg.style.display = 'none';
    document.location.reload();//document rechargé
}


//FIRST NAME
firstName.addEventListener('focusout', function(){
  checkFirst(this);
})
function checkFirst() {
  //si valeur de firstName < 2 ou vide ou !du regex attribue true à "data-error-visible" et retourne faux
  if (firstName.value.trim().length < 2 || firstName.value.trim() === '' || !firstName.value.match(regex)) {
    firstName.parentElement.setAttribute('data-error-visible', 'true');
    return false;
    //sinon attribue false à "data-error-visible" et retourne vrai
  } else (
  firstName.parentElement.setAttribute('data-error-visible', 'false'));
  return true;
}

//LASTNAME
lastName.addEventListener('focusout', function(){
  checkLast(this);
})
function checkLast() {
  //si valeur de lastName < 2 ou vide ou !du regex attribue true à "data-error-visible" et retourne faux

  if (lastName.value.trim().length < 2 || last.value.trim() === '' || !lastName.value.match(regex)) {
    lastName.parentElement.setAttribute('data-error-visible', 'true');
    return false;
    //sinon attribue false à "data-error-visible" et retourne vrai
  } else (
  lastName.parentElement.setAttribute('data-error-visible', 'false'));
  return true;
}

//EMAIL
email.addEventListener('focusout', function(){
  checkEmail(this);
})
function checkEmail() {
    //si valeur de email match à la constante RegExp attribue false à "data-error-visible" et retourne vrai
  if (email.value.trim().match(RegExp)) {
    email.parentElement.setAttribute('data-error-visible', 'false');
    return true;
    //sinon attribue true à "data-error-visible" et retourne faux
  } else (
  email.parentElement.setAttribute('data-error-visible', 'true'));
  return false;
}

//BIRTHDATE
birthdate.addEventListener('focusout', function(){
  checkBirthdate(this);
})
function checkBirthdate() {
  // valeur de birthdate !== 10 et isNAN ===true attribue true à "data-error-visible" et retourne faux
  if (birthdate.value.trim().length !== 10 || isNaN(quantity.value.trim()) === true) {
    birthdate.parentElement.setAttribute('data-error-visible', 'true');
    return false;
    //sinon attribue false à "data-error-visible" et retourne vrai
} else(
birthdate.parentElement.setAttribute('data-error-visible', 'false'));
return true;
}

//TOURNAMENTS
quantity.addEventListener('focusout', function(){
  checkQuantity(this);
})
function checkQuantity() {
  //si valeur de quantity === 0 , isNaN ===true et < 0 attribue true à "data-error-visible" et retourne faux
  if (quantity.value.trim().length === 0 || isNaN(quantity.value.trim()) === true || quantity.value.trim() < 0) {
    quantity.parentElement.setAttribute('data-error-visible', 'true');
    return false;
    //sinon attribue false à "data-error-visible" et retourne vrai
  } else (
  quantity.parentElement.setAttribute('data-error-visible', 'false'));
  return true;
}

//LOCATIONS
allLocations.addEventListener('change', function() {
  checkLocations(this);
})
function checkLocations() {
  // pour (varible i = 0 ; i < location.length ; i= i+1 
    for( let i = 0 ; i < locations.length; i++)
    //si i est coché attribue false à "data-error-visible" et retourne vrai
      if (locations[i].checked) {
          allLocations.setAttribute('data-error-visible', 'false');
          return true;
          //sinon attribue true à "data-error-visible" et retourne faux
      } else {
        allLocations.setAttribute('data-error-visible', 'true');
      }
    return false;
}

//TERMS OF USE
termOfUse.addEventListener('change', function() {
  checkTermOfUse(this);
})
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

//SUBMIT FORM
form.addEventListener('submit', function(e) {
  //empeche le comportement par defaut et verifie les fonctions
  e.preventDefault();
  checkFirst();
  checkLast();
  checkEmail();
  checkBirthdate();
  checkQuantity();
  checkLocations();
  checkTermOfUse();
  // si tout les fonctions retourne true, le formulaire disparait, la modal Thanks s'affiche et forumaire reset.
  if (
      checkFirst(firstName) && 
      checkLast(lastName) &&
      checkEmail(email) &&
      checkBirthdate(birthdate) &&
      checkQuantity(quantity) &&
      checkLocations(allLocations) &&
      checkTermOfUse(termOfUse)) {
        form.style.display ='none';
        modalTh.style.display ='block';
        form.reset();
        //sinon la modal thanks n'apparait pas
      } else {
          modalTh.style.display ='none';
      }
});

