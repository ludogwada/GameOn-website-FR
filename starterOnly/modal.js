function editNav() {
  var x = document.getElementById('myTopnav');
  if (x.className === 'topnav') {
    x.className += ' responsive';
  } else {
    x.className = 'topnav';
  }
}

// DOM ELEMENTS MODAL 
const modalbg = document.querySelector('.bground');
const modalBtn = document.querySelectorAll('.modal-btn');
const formData = document.querySelectorAll('.formData');
const closeBtn = document.getElementsByClassName('close');
const form = document.getElementsByName('formModal');
const regex = /^[a-zA-ZÀ-ÖØ-öø-ÿ]+$/;
const firstName = document.getElementById('first');
const lastName = document.getElementById('last');
const email = document.getElementById('email');
const quantity = document.getElementById('quantity');

// ------ DISPLAY MODAL ------ //
// LAUNCH MODAL EVENTS
modalBtn.forEach((btn) => btn.addEventListener('click', launchModal));
// LAUNCH MODAL FORM
function launchModal() {
  modalbg.style.display = 'block';
}
// CLOSE MODAL FORM
function closeModal() {
  modalbg.style.display = 'none';
}
closeBtn[0].addEventListener('click', closeModal);

//validtion formulaire

formModal.addEventListener('submit', function(){ 
  validForm(this);
})
  function validForm(e){
  e.preventDefault();
  } 

//FIRST NAME
firstName.addEventListener('change', function(){
  checkFirst(this);
})
function checkFirst(e) {
  if (firstName.value.trim().length < 2 || firstName.value.trim() === '' || !firstName.value.match(regex)) {
    firstName.parentElement.setAttribute('data-error-visible', 'true');
    return false;
  }
  firstName.parentElement.setAttribute('data-error-visible', 'false');
  return true;
}

//LASTNAME
lastName.addEventListener('change', function(){
  checkLast(this);
})
function checkLast() {
  if (lastName.value.trim().length < 2 || last.value.trim() === '' || !lastName.value.match(regex)) {
    lastName.parentElement.setAttribute('data-error-visible', 'true');
    return false;
  }
  lastName.parentElement.setAttribute('data-error-visible', 'false');
  return true;
}

//EMAIL
email.addEventListener('change', function(){
  checkEmail(this);
})
function checkEmail() {
  const RegExp = '^[a-zA-Z0-9.-_]+[@]{1}[a-zA-Z0-9.-_]+[.]{1}[a-z]{2,10}$';

  if (email.value.trim().match(RegExp)) {
    email.parentElement.setAttribute('data-error-visible', 'false');
    return true;
  }
  email.parentElement.setAttribute('data-error-visible', 'true');
  return false;
}

//TOURNAMENTS
quantity.addEventListener('change', function(){
  checkQuantity(this);
})
function checkQuantity() {
  if (quantity.value().length != 0 || isNaN(quantity.value()) === false || quantity.value() > 0) {
    quantity.parentElement.setAttribute('data-error-visible', 'false');
    return true;
  }
  quantity.parentElement.setAttribute('data-error-visible', 'true');
  return false;
}



