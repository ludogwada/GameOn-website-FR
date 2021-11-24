

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
closeBtn [0].addEventListener('click', closeModal);
function closeModal() {
  modalbg.style.display = 'none';
  modalTh.style.display = 'none';
  document.location.reload();
}
//--------THANKS MODAL---------//
//LAUNCH MODAL

function launchModalTh() {
  modalTh.style.display = 'block';
}
//CLOSE CROSS 
closeBtn [1].addEventListener('click', closeModal);

//CLOSE MODAL 
closeBtnTh.addEventListener('click',closeModalTh);
function closeModalTh() {
    modalTh.style.display = 'none';
    modalbg.style.display = 'none';
    document.location.reload();
}


//FIRST NAME
firstName.addEventListener('focusout', function(){
  checkFirst(this);
})
function checkFirst() {
  if (firstName.value.trim().length < 2 || firstName.value.trim() === '' || !firstName.value.match(regex)) {
    firstName.parentElement.setAttribute('data-error-visible', 'true');
    return false;
  } else (
  firstName.parentElement.setAttribute('data-error-visible', 'false'));
  return true;
}

//LASTNAME
lastName.addEventListener('focusout', function(){
  checkLast(this);
})
function checkLast() {
  if (lastName.value.trim().length < 2 || last.value.trim() === '' || !lastName.value.match(regex)) {
    lastName.parentElement.setAttribute('data-error-visible', 'true');
    return false;
  } else (
  lastName.parentElement.setAttribute('data-error-visible', 'false'));
  return true;
}

//EMAIL
email.addEventListener('focusout', function(){
  checkEmail(this);
})
function checkEmail() {
  if (email.value.trim().match(RegExp)) {
    email.parentElement.setAttribute('data-error-visible', 'false');
    return true;
  } else (
  email.parentElement.setAttribute('data-error-visible', 'true'));
  return false;
}

//BIRTHDATE
birthdate.addEventListener('focusout', function(){
  checkBirthdate(this);
})
function checkBirthdate() {
  if (birthdate.value.trim().length !== 10) {
    birthdate.parentElement.setAttribute('data-error-visible', 'true');
    return false;
} else(
birthdate.parentElement.setAttribute('data-error-visible', 'false'));
return true;
}

//TOURNAMENTS
quantity.addEventListener('focusout', function(){
  checkQuantity(this);
})
function checkQuantity() {
  if (quantity.value.trim().length === 0 || isNaN(quantity.value.trim()) === true || quantity.value.trim() < 0) {
    quantity.parentElement.setAttribute('data-error-visible', 'true');
    return false;
  } else (
  quantity.parentElement.setAttribute('data-error-visible', 'false'));
  return true;
}

//LOCATIONS
allLocations.addEventListener('change', function() {
  checkLocations(this);
})
function checkLocations() {
    for( let i = 0 ; i < locations.length; i++)
      if (locations[i].checked) {
          allLocations.setAttribute('data-error-visible', 'false');
          return true;
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
  termOfUse.parentElement.setAttribute('data-error-visible', 'true');
    if (termOfUse.checked) {
      termOfUse.parentElement.setAttribute('data-error-visible', 'false');
      return true
    }
    return false;
}

//SUBMIT FORM
form.addEventListener('submit', function(e) {
  e.preventDefault();
  checkFirst();
  checkLast();
  checkEmail();
  checkBirthdate();
  checkQuantity();
  checkLocations();
  checkTermOfUse();
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
      } else {
          modalTh.style.display ='none';
      }
});

